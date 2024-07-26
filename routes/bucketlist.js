const express = require('express');
const { isLoggedIn } = require('../middlewares');
const { addBucketlistItem, updateBucketlistItem, getBucketlistItems, deleteBucketlistItem } = require('../controllers/bucketlist');

const router = express.Router();

// POST /api/users/bucketlists
router.post('/users/bucketlists', isLoggedIn, addBucketlistItem);

// PATCH /api/users/bucketlists/:id
router.patch('/users/bucketlists/:id', isLoggedIn, updateBucketlistItem);

// GET /api/users/bucketlists
router.get('/users/bucketlists', isLoggedIn, getBucketlistItems);

// DELETE /api/users/bucketlists/:id
router.delete('/users/bucketlists/:id', isLoggedIn, deleteBucketlistItem);

module.exports = router;