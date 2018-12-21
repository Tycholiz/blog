var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/posts', function(req, res, next) {
  models.Post.findAll({
    order: [
      ['title', 'DESC'],
    ],
  }).then(function (posts) {
    res.render('posts', {
      title: 'Blog Posts',
      posts: posts
    });
  });
})

router.get('/posts/submit', function (req, res, next) {
  res.render('create_post', {
    title: 'Create new post'
  });
})

router.post('/posts/submit', function(req, res, next) {
  models.Post.create({
    title: req.body.title,
    description: req.body.description,
    email: req.body.email,
  }).then(function() {
    res.redirect('posts');
  });
});

module.exports = router;
