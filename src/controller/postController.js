const CustomError = require('../errors/customError');
const Post = require('../model/Post');

exports.createPost = async (req, res) => {
  try {
    console.log('hey there')
    const {postDescription, userId} = req.body;
    // const createdPost = await Post.create({
    //   postDescription: postDescription,
    //   userId: userId,
    // });
    const post = new Post(req.body);
    const createdPost = await post.save();
    console.log(createdPost);
    return createdPost;
  } catch (error) {
    console.log(error);
    throw new CustomError(error, 400);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const {id} = req.body;
    // const post = await Post.findByPK(id);
    // const updatedPost = await Post.update({ postDescription: postDescription}, {
    //   where: {
    //     id: id
    //   }
    // })
    // const updatedPost = await Post.set(res.body);
    const updatedPost = await Post.update(req.body, {where: { id: id}});
    if (!updatedPost) {
      throw new CustomError('Error getting post', 400);
    }
    return updatedPost;
  } catch (error) {
    throw new CustomError(error, 400);
  }
};
