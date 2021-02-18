import Book from '../models/book';

module.exports = {
  getBook(req: any, res: any, next: any) {
    Book.get()
      .then((data: any) => res.status(200).json({ success: true, books: data }))
      .catch((err: any) => res.status(400).json({ err }));
  },

  createBook(req: any, res: any, next: any) {
    const { title, content } = req.body;

    Book.create(title, content)
      .then(() => res.status(201).json({ success: true, msg: 'Book created' }))
      .catch((err: any) => res.status(400).json({ err }));
  },

  updateBook(req: any, res: any, next: any) {
    const { title, content } = req.body;
    let id = req.params.id;

    Book.update(title, content, id)
      .then(() => res.status(200).json({ success: true, msg: `Book #${id} updated` }))
      .catch((err: any) => res.status(400).json({ err }));
  },

  deleteBook(req: any, res: any, next: any) {
    let id = req.params.id;

    Book.delete(id)
      .then(() => res.status(200).json({ success: true, msg: `Book #${id} deleted` }))
      .catch((err: any) => res.status(400).json({ err }));
  }
};
