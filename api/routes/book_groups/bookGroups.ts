import { Response, Request } from 'express';
import { UserInfoRequest } from '../../types/requests';
import pool from '../../configDB/config';

export const getBookGroups = async (request: UserInfoRequest, response: Response) => {
  try {
    const userId: number = request.userId;
    const {
      rows,
    } = await pool.query('SELECT * FROM book_groups WHERE (is_public=TRUE) OR (user_id=$1) ORDER BY id ASC', [userId]);
    if (rows.length > 0) {
      response.status(200).json(rows);
    } else {
      response.status(404).json({ msg: 'There is no book groups for you' });
    }
  } catch (err) {
    response.status(500).json(err);
  }
};

export const getBookShelf = async (request: Request, response: Response) => {
  console.log(request.params);
  const { email, book_groups } = request.params;

  pool.query(
    `SELECT b.id book_id,
    b.title,
    b.cover,
    b.description,
    a.id author_id,
    a.name,
    a.surname,
    e.name book_groups,
    f.score,
    e.user_id,
    u.email 
    FROM books b INNER JOIN authors_books c ON b.id=c.book_id INNER JOIN authors a ON a.id=c.author_id INNER JOIN book_groups_books d ON b.id=d.book_id INNER JOIN book_groups e ON e.id=d.book_group_id INNER JOIN reviews f ON b.id=f.book_id INNER JOIN users u ON u.id=f.user_id  WHERE email=$1 AND e.name=$2`,
    [email, book_groups],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );

}


export const getBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const bookGroupId: number = parseInt(request.params.id);
    const { rows } = await pool.query('SELECT * FROM book_groups WHERE id=$1', [bookGroupId]);
    response.status(200).json(rows);
  } catch (err) {
    response.status(500).json(err);
  }
};

export const createBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const userId: number = request.userId;
    const { is_public, name } = request.body;
    await pool.query('INSERT INTO book_groups (is_public, user_id, name) VALUES ($1, $2, $3)', [
      is_public,
      userId,
      name,
    ]);
    response.status(201).send('Book group added');
  } catch (err) {
    response.status(500).json(err);
  }
};

export const deleteBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const bookGroupId = parseInt(request.params.id);
    await pool.query('DELETE FROM book_groups WHERE id=$1', [bookGroupId]);
    response.status(204).send('Book group deleted');
  } catch (err) {
    response.status(500).json(err);
  }
};

export const modifyBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const bookGroupId = parseInt(request.params.id);
    const { is_public, name } = request.body;
    await pool.query('UPDATE book_groups SET is_public=$1, name=$2 WHERE id=$3', [is_public, name, bookGroupId]);
    response.status(200).send('Book group updated');
  } catch (err) {
    response.status(500).json(err);
  }
};

export const getBooksFromBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const bookGroupId = parseInt(request.params.id);
    const {
      rows,
    } = await pool.query(
      'SELECT * FROM books INNER JOIN book_groups_books ON book_id=id WHERE (book_group_id=$1) AND (removed_at IS NULL)',
      [bookGroupId]
    );
    response.status(200).json(rows);
  } catch (err) {
    response.status(500).json(err);
  }
};

export const addBooktoBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const bookGroupId = parseInt(request.params.id);
    const { book_id } = request.body;
    await pool.query('INSERT INTO book_groups_books (book_group_id, book_id) VALUES ($1, $2)', [bookGroupId, book_id]);
    response.status(201).send('Book added to book group');
  } catch (err) {
    response.status(500).json(err);
  }
};

export const deleteBookfromBookGroup = async (request: UserInfoRequest, response: Response) => {
  try {
    const bookGroupId = parseInt(request.params.id);
    const bookId = parseInt(request.params.book_id);
    await pool.query('UPDATE book_groups_books SET removed_at=NOW() WHERE (book_group_id=$1) AND (book_id=$2)', [
      bookGroupId,
      bookId,
    ]);
    response.status(204).send('Book group deleted');
  } catch (err) {
    response.status(500).json(err);
  }
};
