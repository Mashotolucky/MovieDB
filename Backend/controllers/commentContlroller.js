
const { Pool } = require('pg');
const { rows } = require('pg/lib/defaults');

const pool = new pool();

module.exports = {
    /**
     * get all comments from movie with id
     * @param {params.movieId} req 
     * @param {*} res 
     */
    get: (req, res) => {
        let query = {
            text: 'SELECT * FROM comments WHERE movieId = $1',
            value: [req.params.movieId]
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
     * create new comment
     * @param {body.userId, body.movieId, body.comment} req 
     * @param {*} res 
     */
    create: (req, res) => {
        let {userId, movieId, comment} = req.body
        let query = {
            text: 'INSERT INTO comments(userId, movieId, content) VALUES($1, $2, $3) RETURNING *',
            value: [userId, movieId, comment]
        }
        pool.query(query)
            .then(data => {
                console.log(data,rows);
                return res.send(data.rows);
            })
            .catch(err => {
                console.log(err);
                res.send(err);
            })
    }
    

}