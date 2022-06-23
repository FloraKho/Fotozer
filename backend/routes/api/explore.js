const express = require('express')
const asyncHandler = require('express-async-handler');
const { Photo, User } = require('../../db/models');

const router = express.Router();

//read all photos
router.get('/', asyncHandler(async (req, res) => {
    const images = await Photo.findAll({
        order: [['updatedAt', 'DESC']],
        include: User
    })
    return res.json(images);
}))


module.exports = router;