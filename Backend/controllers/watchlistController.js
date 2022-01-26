const { rows } = require('pg/lib/defaults');
const seed = require('../db/config')

const pool = seed;

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.get = (req, res) => {
    let query = {
        text: 'SELECT * FROM watchlist WHERE user_id = $1',
        values: [req.params.userId]
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
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.create = (req, res) => {
    let query = {
        text: 'INSERT INTO watchlist(user_id, movie_id) VALUES($1, $2) RETURNING *',
        values: [req.body.userId, req.body.movieId]
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
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.remove = (req, res) => {
    let query = {
        text: 'DELETE FROM watchlist WHERE watchlist_id = $1 RETURNING *',
        values: [req.params.id]
    }
    pool.query(query)
        .then(data => {
            console.log(data.rows);
            return res.send(data.rows);
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
}
