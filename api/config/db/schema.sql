-- DROP DATABASE IF EXISTS bookweb_app;
CREATE DATABASE bookweb_app;

\c bookweb_app;

CREATE TABLE IF NOT EXISTS book(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL
);

INSERT into book(title, content) VALUES('Book 1', 'This is book 1');
INSERT into book(title, content) VALUES('Book 2', 'This is book 2');
INSERT into book(title, content) VALUES('Book 3', 'This is book 3');
INSERT into book(title, content) VALUES('Book 4', 'This is book 4');