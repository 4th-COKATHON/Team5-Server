const express = require('express');
const { isLoggedIn } = require('../middlewares');
const { addBucketlistItem } = require('../controllers/bucketlist');

const router = express.Router();

// POST /api/users/bucketlists
router.post('/users/bucketlists', isLoggedIn, addBucketlistItem);

module.exports = router;