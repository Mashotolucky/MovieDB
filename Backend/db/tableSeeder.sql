
--//CREATE AND SEED movies_app DATABASE//---

--USERS TABLE
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO users(name, email, password)
VALUES 
('simphiwe', 'simphiwe@email.com', 'simphiwe123'),
('shiba', 'shiba@email.com', 'shiba123'),
('lesho', 'lesho@email.com', 'lesho123'),
('zizipho', 'zizipho@email.com', 'zizipho123'),
('mash', 'mash@email.com', 'mash123');


--MOVIES TABLE
DROP TABLE IF EXISTS movies CASCADE;
CREATE TABLE movies(
    movie_id SERIAL PRIMARY KEY,
    api_movie_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL
);


--WATCHLIST TABLE
DROP TABLE IF EXISTS watchlist CASCADE;
CREATE TABLE watchlist(
    watchlist_id SERIAL PRIMARY KEY,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (movie_id) REFERENCES movies (movie_id)
    created_at TIMESTAMPTZ DEFAULT NOW()
);

--COMMENTS TABLE
DROP TABLE IF EXISTS comments CASCADE;
CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    message VARCHAR(1000) NOT NULL,
    user_id INT NOT NULL,
    movie_id INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
    FOREIGN KEY(user_id) REFERENCES users (user_id),
    FOREIGN KEY(movie_id) REFERENCES movies (movie_id),
    
);