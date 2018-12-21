const Post = require('../models/post')

module.exports = {
	list(req, res, next) {
		return Post
			.findAll({
				order: [
					['title', 'DESC'],
				],
				include: [{
					model: Post
				}],
			})
			.then(function(posts) {
				res.render('posts', {
					title: 'Blog Posts',
					posts: posts
				});
			});
	},
	getForm(req, res, next) {
		res.render('create_post', {
			title: 'Create new post'
		});
	},
	create(req, res, next) {
		return Post
			.create({
				title: req.body.title,
				description: req.body.description,
				email: req.body.email,
			})
			.then(post => res.status(201).redirect('/posts'))
			.catch(error => res.status(400).send(error));
	}
}