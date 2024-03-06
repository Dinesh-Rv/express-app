const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const CustomError = require('../errors/customError');

router.post('/create', async function (req, res) {
  try {
    console.log('post');
    const createdUser = await userController.createUser(req, res);
    handleSuccess(res, createdUser);
  } catch (error) {
    handleFailure(res, error);
  }
}); //sendsucces response/failure response

const handleSuccess = (res, value) => {
  res.status(200).json({value: value});
};

const handleFailure = (res, error) => {
  if (error instanceof CustomError) {
    res.send(400);
  }
};

router.get('/get', async function (req, res) {
  try {
    console.log('get');
    const users = await userController.getAllUsers(req, res);
    handleSuccess(res, users);
  } catch (error) {
    handleFailure(res, error);
  }
});
module.exports = router;
