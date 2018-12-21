var express = require('express');
var router = express.Router();
var postController = require('../controllers').postController

// Require controller modules.

/* GET home page. */
router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'Blog' });
});

router.get('/posts', postController.list);
router.get('/posts/submit', postController.getForm)
router.post('/posts/submit', postController.create)

module.exports = router;
