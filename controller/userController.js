const User = require("../model/userSchema");

const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });

    if (exist) {
      return response.status(401).send("Username already in use");
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json("User is successfully registered");
  } catch (err) {
    console.log(err.message);
  }
};

const userLogin = async (request, response) => {
  try {
    let user = await User.findOne({
      username: request.body.username,
      password: request.body.password,
    });

    if (user) {
      return response
        .status(200)
        .json(`${request.body.username} login successfull`);
    }

    response.status(401).json("Invalid credentials");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { userSignup, userLogin };
