const { getAllPosts, createPost, getPostsByAutor } = require('../../controllers/postsController');

const router = require('express').Router();

router.get('/', getAllPosts)
router.post('/', createPost)
router.get('/:idAutor', getPostsByAutor)

module.exports = router;