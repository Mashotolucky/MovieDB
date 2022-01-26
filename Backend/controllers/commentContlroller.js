const { rows } = require('pg/lib/defaults');
const seed = require('../db/config')

const pool = seed;


/**
 * get all comments from movie with id
 * @param {*} req 
 * @param {*} res 
 */
exports.get = (req, res) => {
    let query = {
        text: 'SELECT * FROM comments WHERE movie_id = $1',
        value: [req.params.movieId]
    }
    pool.query(query.text, query.value)
        .then(data => {
            console.log(data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
},
/**
 * create new comment
 * @param {*} req 
 * @param {*} res 
 */
exports.create = (req, res) => {
    const {userId, movieId, comment} = req.body
    let query = {
        text: 'INSERT INTO comments(user_id, movie_id, message) VALUES($1, $2, $3) RETURNING *',
        value: [userId, movieId, comment]
    }
    pool.query(query.text, query.value)
        .then(data => {
            console.log(data,rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
},
/**
 * remove comment with id
 * @param {*} req 
 * @param {*} res 
 */
exports.remove = (req, res) => {
    let query = {
        text: 'DELETE FROM comments WHERE id = $1 RETURNING *',
        value: [req.params.id]
    }
    pool.query(query)
        .then(data => {
            console.log(data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
},
/**
 * update comment content of comment with id
 * @param {*} req 
 * @param {*} res 
 */
exports.update = (req,res) => {
    let query = {
        text: 'UPDATE comments SET content = $1 WHERE id = $2 RETURNING *',
        value: [req.params.id, req.body.comment]
    }
    pool.query(query)
        .then(data => {
            console.log(data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
}

