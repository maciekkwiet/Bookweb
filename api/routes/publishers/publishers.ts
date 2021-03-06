import pool from '../../configDB/config';
import { Request, Response } from 'express';

export const getPublishers = async (request: Request, response: Response) => {
  pool.query('SELECT * FROM publishers INNER JOIN addresses ON publishers.id = addresses.id', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getPublisherById = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM publishers WHERE id = $1', [id], (error, publisherResults) => {
    if (error) {
      throw error;
    }

    pool.query('SELECT * FROM addresses WHERE id = $1', [id], (error, addressResults) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ ...publisherResults.rows[0], ...addressResults.rows[0] });
    });
  });
};

export const createPublisher = async (request: Request, response: Response) => {
  const { name, description, street, city, flat_number, zip_code, country } = request.body;

  pool.query(
    'INSERT INTO addresses (street,city,flat_number,zip_code,country) VALUES ($1, $2, $3, $4, $5) RETURNING id',
    [street, city, flat_number, zip_code, country],
    (error, results) => {
      if (error) {
        throw error;
      }
      const address_id = results.rows[0].id;

      pool.query(
        'INSERT INTO publishers (name, description, address_id) VALUES ($1, $2, $3)',
        [name, description, address_id],
        (error, results) => {
          if (error) {
            throw error;
          }
          response.status(201).send(`Publisher added`);
        }
      );
    }
  );
};

export const updatePublisher = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);
  const { name, description, street, city, flat_number, zip_code, country } = request.body;

  pool.query(
    'UPDATE publishers SET name = $1, description = $2 WHERE id = $3 RETURNING address_id',
    [name, description, id],
    (error, results) => {
      if (error) {
        throw error;
      }

      pool.query(
        'UPDATE addresses SET street = $1, city = $2, flat_number = $3, zip_code = $4, country = $5 WHERE id = $6',
        [street, city, flat_number, zip_code, country, id],
        (error, results) => {
          if (error) {
            throw error;
          }
          response.status(200).send(`Publishers and addressess modified`);
        }
      );
    }
  );
};

export const deletePublisher = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM publishers WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }

    pool.query('DELETE FROM addresses WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Publisher deleted`);
    });
  });
};

module.exports = {
  getPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher,
};
