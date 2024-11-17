const { getAllAutores, createAutores, getPostsByAutorID } = require('../../controllers/autoresController');


const router = require('express').Router();

router.get('/', getAllAutores);
router.post('/',createAutores);
router.get('/:autor_id/posts', getPostsByAutorID);

module.exports = router;
