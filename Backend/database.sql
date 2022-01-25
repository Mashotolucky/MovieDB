
--run: ' psql movies_app < databse.sql ' to excecute

--create database tables
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TABLE IF EXISTS movies CASCADE;
CREATE TABLE movies(
    movie_id SERIAL PRIMARY KEY,
    api_movie_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS watchlist CASCADE;
CREATE TABLE watchlist(
    watchlist_id SERIAL PRIMARY KEY,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (movie_id) REFERENCES movies (movie_id)
    created_at TIMESTAMPTZ DEFAULT NOW()
);

DROP TABLE IF EXISTS comments CASCADE;
CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    message VARCHAR(1000) NOT NULL,
    user_id INT NOT NULL,
    movie_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users (user_id),
    FOREIGN KEY(movie_id) REFERENCES movies (movie_id)
);