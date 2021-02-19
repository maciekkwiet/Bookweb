import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from '../models/book';

const bookRoutes = (app: any) => {
  app.get('/users', getBooks)
  app.get('/users/:id', getBookById)
  app.post('/users', createBook)
  app.put('/users/:id', updateBook)
  app.delete('/users/:id', deleteBook)
};

export default bookRoutes
