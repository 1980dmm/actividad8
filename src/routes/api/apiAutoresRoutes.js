const { getAllAutores, createAutores } = require('../../controllers/autoresController');

const router = require('express').Router();

router.get('/', getAllAutores);
router.post('/',createAutores);

module.exports = router;
