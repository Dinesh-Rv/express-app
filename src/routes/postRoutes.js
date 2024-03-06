const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');
const {
  generateCreatedBy,
  generateModifiedBy,
} = require('../middleware/userMiddleware');
const CustomError = require('../errors/customError');

router.post('/create', generateCreatedBy, async function (req, res) {
    try {
        const createdPost =  await postController.createPost(req, res);
        handleSuccess(createdPost);
    } catch (error) {
        handleFailure(res, error);
    }
});

router.put('/update', generateModifiedBy, async function (req, res) {
    try {
        const updatedPost = await postController.updatePost(req, res);
        handleSuccess(updatedPost);
    } catch (error) {
        handleFailure(res, error);
    }
});

const handleSuccess = (value) => {
    console.log('sampl saml')
  res.status(200).json(value);
};

const handleFailure = (res, error) => {
  if (error instanceof CustomError) {
    res.sendStatus(400);
  }
};
module.exports = router;
