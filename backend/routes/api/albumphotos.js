const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, AlbumPhoto, Album, Photo } = require('../../db/models');

const router = express.Router();

router.post('/', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { albumId, photoId } = req.body;
    const albumPhoto = await AlbumPhoto.create({
        albumId,
        photoId
    })
    return res.json(albumPhoto);
}))


router.delete('/:albumphotoId', requireAuth, asyncHandler(async (req, res) => {
    const { albumphotoId } = req.params;
    const deleteJoinKey = await AlbumPhoto.findByPk(albumphotoId);
    await deleteJoinKey.destroy();
    return res.json(deleteJoinKey);
}))

// //find all photos from a specific album
// router.get('/albums/:albumId', asyncHandler(async (req, res) => {
//     const { albumId } = req.params;
//     const photosJoinKey = await AlbumPhoto.findAll({
//         where: {
//             albumId: albumId
//         },
//         include: {
//             model: Photo,
//             include: User
//         }
//     })
//     return res.json(photosJoinKey);
// }))


// //find all albums for a specific photo
// router.get('/photos/:photoId', asyncHandler(async (req, res) => {
//     const { photoId } = req.params;
//     const albumsJoinKey = await AlbumPhoto.findAll({
//         where: {
//            photoId: photoId
//         },
//         include: {
//             model: Album,
//             include: User
//         }
//     })
//     return res.json(albumsJoinKey);
// }))

router.get('/', asyncHandler(async (req, res) => {
    const keys = await AlbumPhoto.findAll({
       include: [Album, Photo]
    })
    return res.json(keys);
}))





module.exports = router;