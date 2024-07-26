const express = require('express');
const { isLoggedIn } = require('../middlewares');
const { addBucketlistItem, updateBucketlistItem } = require('../controllers/bucketlist');

const router = express.Router();

// POST /api/users/bucketlists
router.post('/users/bucketlists', isLoggedIn, addBucketlistItem);

// PATCH /api/users/bucketlists/:id
router.patch('/users/bucketlists/:id', isLoggedIn, updateBucketlistItem);

module.exports = router;