const express = require('express');
const router = express.Router();
const commentContlroller = require('../controllers/commentContlroller');

/**
 * Get all comments by movie ID
 */
router.get('/:movieId', commentContlroller.get)

/**
 * create a new post
 */
router.post('/', commentContlroller.create)

/**
 * delete post by id
 */
router.delete('/:id', commentContlroller.remove)

/**
 * update a post by id
 */
router.put('/:id', () => commentContlroller.update)

module.exports = router