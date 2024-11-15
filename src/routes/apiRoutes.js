const router = require('express').Router();

router.use('/autores/', require('./api/apiAutoresRoutes'));
router.use('/posts/', require('./api/apiPostsRoutes'));

module.exports = router;