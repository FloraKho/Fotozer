const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Album } = require('../../db/models');

const router = express.Router();


router.post('/', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { userId, albumName } = req.body;
    const newAlbum = await Album.create({
        userId: userId,
        albumName: albumName
    })
    return res.json(newAlbum);
}))


router.put('/:albumId', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { albumId } = req.params;
    const album = await Photo.findByPk(albumId, {
        include: User
    });
    const { albumName } = req.body;
    await album.update({
        albumName
    })
    return res.json(album);
}))


router.delete('/:albumId', requireAuth, asyncHandler(async (req, res) => {
    const { albumId } = req.params;
    const deleteAlbum = await Album.findByPk(albumId);
    await deleteAlbum.destroy();
    return res.json(deleteAlbum);
}))



module.exports = router;