const express = require('express');
const watchlistController = require('../controllers/watchlistController');
const router = express.Router();

/**
 * Get all watchlist Items by user id
 */
router.get('/:userId', watchlistController.get())

/**
 * create a new watchlist item
 */
router.post('/', watchlistController.create())

/**
 * delete watchlist item by id
 */
router.delete('/:id', watchlistController.remove())