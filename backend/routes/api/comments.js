const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { Comment, User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


const validateComments = [
    check('content')
        .notEmpty()
        .withMessage('Please enter your comment.'),
    handleValidationErrors
];


//create a comment (user only)
router.post('/', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { content, photoId, userId } = req.body;
    const comment = await Comment.create({
        content: content,
        userId: userId,
        photoId: photoId
    })
    const newComment = await Comment.findByPk(comment.id, {
        include: User
    });
    return res.json(newComment);
}))


//read all comment
router.get('/photos/:photoId', asyncHandler(async (req, res) => {
    const { photoId } = req.params;
    const comments = await Comment.findAll({
        where: { 
            photoId: photoId 
        },
        include: User
    });
    return res.json(comments);
}))

//update comment (user only)
router.put('/:commentId', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const oldComment = await Comment.findByPk(commentId);
    const { content } = req.body;
    const updatedComment = await oldComment.update({
        content
    })
    return res.json(updatedComment);
}))

//delete comment (user only)
router.delete('/:commentId', requireAuth, asyncHandler(async (req, res) => {
    const { commentId } = req.params;
    const deleteComment = await Comment.findByPk(commentId);
    await deleteComment.destroy();
    return res.json(deleteComment);
}))


module.exports = router;