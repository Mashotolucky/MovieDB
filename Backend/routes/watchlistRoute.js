const express = require('express');
const router = express.Router();
const watchlistController = require('../controllers/watchlistController');

/**
 * Get all watchlist Items by user id
 */
router.get('/:userId', watchlistController.get)

/**
 * create a new watchlist item
 */
router.post('/', watchlistController.create)

/**
 * delete watchlist item by id
 */
router.delete('/:id', watchlistController.remove)