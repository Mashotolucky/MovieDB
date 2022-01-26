const { Query } = require("pg/lib/client");

const { Pool } = ('pg');

const pool = new Pool();

module.exports = {
    /**
     * Get one user by id
     * @param {*} req 
     * @param {*} res 
     */
    getOne: (req, res) => {
        let query = {
            text: 'SELECT * FROM users WHERE id = $2',
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
    removeOne: (req, res) => {
        let query = {
            text: 'DELETE FROM users WHERE id = $1 RETURNING *',
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
    update: (req,res) => {
        let query = {
            text: 'UPDATE users SET name = $1, username = $2 WHERE id = $3 RETURNING *',
            value: [req.body.name, req.body.username, req.params.id]
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
}