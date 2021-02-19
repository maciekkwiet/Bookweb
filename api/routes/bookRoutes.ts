import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from '../models/book';

const bookRoutes = (app: any) => {
  app.get('/books', getBooks)
  app.get('/books/:id', getBookById)
  app.post('/books', createBook)
  app.put('/books/:id', updateBook)
  app.delete('/books/:id', deleteBook)
};

export default bookRoutes
