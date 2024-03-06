const { DataTypes } = require('sequelize');
const User = require('./User');

const sequelize = require('../database/sequelize');

const Post = sequelize.define('Post', {
    postDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    updatedBy: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

Post.belongsTo(User, { foreignKey: 'userId' });
module.exports = Post;