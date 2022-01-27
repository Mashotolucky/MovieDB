const express = require('express');
const { user } = require('pg/lib/defaults');
const userController = require('../controllers/userController');
const router = express.Router();

/**
 * Get user data id
 */
router.get('/:id', userController.getOne)

/**
 * delete user by id
 */
router.delete('/:id', userController.removeOne)

/**
 * update a user by id
 */
router.put('/:id', userController.update)

module.exports = router
