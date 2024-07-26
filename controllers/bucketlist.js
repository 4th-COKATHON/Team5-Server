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

exports.updateBucketlistItem = async (req, res, next) => {
    const { id } = req.params;
    const { title } = req.body;
    const userId = req.user.id;

    try {
        const bucketlistItem = await Bucketlist.findOne({ where: { id, user_id: userId } });
        if (!bucketlistItem) {
            return res.status(404).json({ message: 'Bucketlist item not found' });
        }

        bucketlistItem.title = title;
        await bucketlistItem.save();

        res.status(200).json({ message: 'Bucketlist item updated successfully', data: bucketlistItem });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.getBucketlistItems = async (req, res, next) => {
    const userId = req.user.id;

    try {
        const bucketlistItems = await Bucketlist.findAll({ where: { user_id: userId } });
        res.status(200).json({ message: 'Bucketlist items retrieved successfully', data: bucketlistItems });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.deleteBucketlistItem = async (req, res, next) => {
    const { id } = req.params;
    const userId = req.user.id;

    try {
        const bucketlistItem = await Bucketlist.findOne({ where: { id, user_id: userId } });
        if (!bucketlistItem) {
            return res.status(404).json({ message: 'Bucketlist item not found' });
        }

        await bucketlistItem.destroy();
        res.status(200).json({ message: 'Bucketlist item deleted successfully' });
    } catch (error) {
        console.error(error);
        next(error);
    }
};