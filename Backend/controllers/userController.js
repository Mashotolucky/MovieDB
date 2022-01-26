const { rows } = require('pg/lib/defaults');
const seed = require('../db/seeder')

const pool = seed;


/**
 * Get one user by id
 * @param {*} req 
 * @param {*} res 
 */
exports.getOne = (req, res) => {
    let query = {
        text: 'SELECT * FROM users WHERE user_id = $2',
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
 * remove one user with id
 * @param {*} req 
 * @param {*} res 
 */
exports.removeOne = (req, res) => {
    let query = {
        text: 'DELETE FROM users WHERE user_id = $1 RETURNING *',
        value: [req.params.id]
    }
    Pool.query(query)
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
 * update user's name & username wikth id
 * @param {*} req 
 * @param {*} res 
 */
exports.update = (req, res) => {
    let query = {
        text: 'UPDATE users SET name = $1 WHERE user_id = $2 RETURNING *',
        value: [req.body.name, req.params.id]
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
