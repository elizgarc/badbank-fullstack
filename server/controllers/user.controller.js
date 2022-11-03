const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  console.log("register", req.body);
  await User.create(req.body);
  res.send("User created");
}

async function login(req, res) {
  console.log("login", req.body);
  const loggedInUser = await User.findOne({
    email: req.body.email,
  });
  if (loggedInUser) {
    console.log("loggedInUser", loggedInUser.password === req.body.password);
    if (loggedInUser.password === req.body.password) {
      const token = jwt.sign({ id: loggedInUser._id }, "secret", {
        expiresIn: "1d",
      });
      console.log("token",token)
      loggedInUser.token=token 
      res.json({token:token});
    } else {
      // if the password is incorrect
      res.status(400).send("incorrect password");
    }
  } else {
    // if the user doesn't exists
    res.status(400).send("there's no user with this email");
  }
}

async function transaction (req, res) {
  console.log("deposit", req.body);
  console.log("req.user", req.user);
  await User.findByIdAndUpdate(req.user._id,{
    balance: req.body.balance
  }) 
  res.send("balance is updated")
}
module.exports = { register, login, transaction };
