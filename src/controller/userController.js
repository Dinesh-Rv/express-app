const CustomError = require('../errors/customError');
const User = require('../model/User');

exports.createUser = async (req, res, next) => {
  try {
    const {firstName, lastName, email, password} = req.body;
    if (!lastName) {
      console.log('error');
      throw new CustomError('Lastname is required', 400);
    }
    const user = new User(req.body);
    // User.firstName = firstName;
    // User.lastName = lastName;
    // User.email = email;
    // User.password = password;

    const createdUser = await user.save();
    // const createdUser = await User.create({
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password: password,
    // });
    return createdUser;
  } catch (error) {
    console.log(error);
    throw new CustomError(error, 400);
    // res.status(400).json({error: error});
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.findAll();
    users = users.filter((user) => !user.is_deleted);
    return users;
  } catch (error) {
    console.log('[NODENEW]: Unexpected error occurred:   ', error);
    throw new CustomError(error, 400);
  }
};
