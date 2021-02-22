CREATE DATABASE jwtTest;

CREATE TABLE IF NOT EXISTS users (
  user_id BIGSERIAL PRIMARY KEY NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

--insert fake users
INSERT INTO users (user_name, user_email, user_password) VALUES('tygrys', 'tygrys@gmail.com', 'tygrys');
INSERT INTO users (user_name, user_email, user_password) VALUES('borsuk', 'borsuk@gmail.com', 'borsuk');
INSERT INTO users (user_name, user_email, user_password) VALUES('kaczka', 'kaczka@gmail.com', 'kaczka');