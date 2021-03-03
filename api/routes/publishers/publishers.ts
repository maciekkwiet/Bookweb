import pool from '../../configDB/config';
import { Request, Response } from 'express';

export const getPublishers = (request: Request, response: Response) => {
  pool.query('SELECT * FROM publishers ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getPublisherById = (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM publishers WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const createPublisher = (request: Request, response: Response) => {
  const { name, description } = request.body;

  pool.query('INSERT INTO publishers (name, description) VALUES ($1, $2)', [name, description], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Publisher added`);
  });
};

export const updatePublisher = (request: Request, response: Response) => {
  const id = parseInt(request.params.id);
  const { name, description } = request.body;

  pool.query(
    'UPDATE publishers SET name = $1, description = $2 WHERE id = $3',
    [name, description, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Publisher modified`);
    }
  );
};

export const deletePublisher = (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM publishers WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Publisher deleted`);
  });
};

module.exports = {
  getPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
};
