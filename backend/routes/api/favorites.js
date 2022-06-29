const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { User, Favorite } = require('../../db/models');

const router = express.Router();

//create

router.post('/', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { userId, photoId } = req.body;
    const newFave = await Favorite.create({
        userId: userId,
        photoId: photoId
    })
    return res.json(newFave);
}))

//get all faves
// router.get('/', asyncHandler(async (req, res) => {
//     const faves = await Favorite.findAll({
//         include: User
//     })
//     return res.json(faves);
// }))

//get photo's faves
router.get('/photos/:photoId', asyncHandler(async (req, res) => {
    const { photoId } = req.params;
    const faves = await Favorite.findAll({
        where: {
            photoId: photoId
        },
        include: User
    });

    return res.json(faves);
}))


//delete 

router.delete('/:favoriteId', requireAuth, asyncHandler(async (req, res) => {
    const { favoriteId } = req.params;
    const deleteFave = await Favorite.findByPk(favoriteId);
    await deleteFave.destroy();
    return res.json(deleteFave);
}))



module.exports = router;

