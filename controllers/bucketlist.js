const Bucketlist = require('../models/bucketlist');

exports.addBucketlistItem = async (req, res, next) => {
    const { title } = req.body;
    const userId = req.user.id;

    try {
        const newBucketlistItem = await Bucketlist.create({
            user_id: userId,
            title,
        });

        res.status(201).json({ message: 'Bucketlist item added successfully', data: newBucketlistItem });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
