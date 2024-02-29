const Post = require('../model/Post');

exports.createPost = async (req, res) => {
  try {
    const {postDescription, userId} = req.body;
    const createdPost = await Post.create({
      postDescription: postDescription,
      userId: userId,
    });
    res.status(201).json({post: createdPost});
  } catch (error) {
    res.status(400).json({error: error});
  }
};
