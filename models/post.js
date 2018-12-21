'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Post.associate = function(models) {

  };
  return Post;
};