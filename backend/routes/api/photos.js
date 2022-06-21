const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { Photo, Comment } = require('../../db/models');


const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateLogin = [
    check('title')
        .notEmpty()
        .withMessage('Please provide a title.'),
    check('imgURL')
        .isURL()
        .withMessage('Please provide a valid url address'),
    handleValidationErrors
];


//upload photo
router.post('/', requireAuth, asyncHandler(async (req, res) => {

    const { title, description, imgURL } = req.body;
    const userId = req.user.id;
    const newPhoto = await Photo.create({
        title: title,
        description: description,
        imgURL: imgURL,
        userId: userId
    })
    return res.json(newPhoto);
}))



//read specific photo
router.get('/:photoId', asyncHandler(async (req, res) => {
    const { photoId } = req.params;
    const photo = await Photo.findByPk(photoId);
    return res.json(photo);
}))

//update photo
router.put('/:photoId', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { photoId } = req.params;
    const photo = await Photo.findByPk(photoId);
    const { title, description } = req.body;
    await photo.update({
        title, description
    })
    await photo.save();
    return res.json(photo);
}))


//delete photo
router.delete('/:photoId', requireAuth, asyncHandler(async (req, res) => {
    const { photoId } = req.params;
    const deletePhoto = await Photo.findByPk(photoId);
    await deletePhoto.destroy();
    return res.json(deletePhoto);
}))


module.exports = router;