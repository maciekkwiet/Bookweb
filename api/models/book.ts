import db from '../config/config';

const Book: any = {};

Book.create = (title: string, content: string) => {
  return db.none(`INSERT into articles(title, content)` + `VALUES($1, $2)`, [title, content]);
};

Book.get = () => {
  return db.any('SELECT * FROM articles');
};

Book.update = (title: string, content: string, id: Number) => {
  return db.none(`UPDATE articles SET title = $1, content = $2 WHERE id = $3`, [
    title,
    content,
    id
  ]);
};

Book.delete = (id: Number) => {
  return db.none(`DELETE from articles WHERE id = $1`, id);
};

export default Book
