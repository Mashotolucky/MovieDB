const express = require('express');
const router = express.Router();
const commentContlroller = require('../controllers/commentContlroller');

/**
 * Get all comments by movie ID
 */
router.get('/:movieId', () => {})

/**
 * create a new post
 */
router.post('/', () => {})

/**
 * delete post by id
 */
router.delete('/:id', () => {})

/**
 * update a post by id
 */
router.put('/:id', () => {})