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
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

Post.belongsTo(User, { foreignKey: 'userId' });
module.exports = Post;