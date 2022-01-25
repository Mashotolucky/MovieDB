
const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    get: (req, res) => {
        let query = {
            text: 'SELECT * FROM watchlist WHERE userId = $1',
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
    create: (req, res) => {
        let query = {
            text: 'INSERT INTO watchlist(userId, movieId) VALUES($1, $2) RETURNING *',
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
    remove: (req, res) => {
        let query = {
            text: 'DELETE FROM watchlist WHERE id = $1 RETURNING *',
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
}