const User = require('../model/User');

exports.createUser = async (req, res) => {
  try {
    const createdUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({user: createdUser});
  } catch (error) {
    console.log(error);
    res.status(400).json({error: error});
  }
};

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.findAll();
        users = users.filter((user) => !user.is_deleted);
        res.status(200).send(users);
    } catch (error) {
        console.log('[NODENEW]: Unexpected error occurred:   ', error);
        res.status(400).send('Error getting users');
    }
}
