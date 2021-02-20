import pool from '../../configDB/config';

export const getBooks = (request: any, response: any) => {
  pool.query('SELECT * FROM books ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

export const getBookById = (request: any, response: any) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM books WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

export const createBook = (request: any, response: any) => {
  const { title, content } = request.body

  pool.query('INSERT INTO books (title, content) VALUES ($1, $2)', [title, content], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added`)
  })
}

export const updateBook = (request: any, response: any) => {
  const id = parseInt(request.params.id)
  const { title, content } = request.body

  pool.query(
    'UPDATE books SET title = $1, content = $2 WHERE id = $3',
    [title, content, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Book modified`)
    }
  )
}

export const deleteBook = (request: any, response: any) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM books WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Book deleted`)
  })
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}
