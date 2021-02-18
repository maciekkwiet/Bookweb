const BooksController = require('../controllers/booksController');

const bookRoutes = (app: any) => {
  app.get('/', BooksController.getBook);
  app.post('/new', BooksController.createBook);
  app.put('/update/article/:id', BooksController.updateBook);
  app.delete('/delete/article/:id', BooksController.deleteBook);
};

export default bookRoutes
