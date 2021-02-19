DROP DATABASE IF EXISTS bookweb_db;
CREATE DATABASE bookweb_db;

\c bookweb_db;

CREATE TABLE IF NOT EXISTS books(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL
);

INSERT into books(title, content) VALUES('Book 1', 'This is book 1');
INSERT into books(title, content) VALUES('Book 2', 'This is book 2');
INSERT into books(title, content) VALUES('Book 3', 'This is book 3');
INSERT into books(title, content) VALUES('Book 4', 'This is book 4');