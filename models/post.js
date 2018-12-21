'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        max: 255
      },
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        min: 3,
        max: 1000,
      },
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },
  }, {});
  return Post;
};