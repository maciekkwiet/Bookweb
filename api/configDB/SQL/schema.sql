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

CREATE TABLE IF NOT EXISTS users(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

--insert fake users
INSERT into users(name, email, password) VALUES('tygrys', 'zebra@gmail.com', 'tygrys');
INSERT into users(name, email, password) VALUES('borsuk', 'borsuk@gmail.com', 'borsuk');
INSERT into users(name, email, password) VALUES('kaczka', 'kaczka@gmail.com', 'kaczka');