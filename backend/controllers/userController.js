import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import User from "../models/User.js";

const createToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//Route for user login
const loginUser = async (req, res) => {};

//Route for user register

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //checking if user exist or not
    const exists = await User.findOne({ email });

    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    //    const newUser =  User({
    //      name,
    //      email,
    //      password: hashedPassword,
    //    });

    const user = await newUser.save();

    const token = await createToken(user._id);
    res.json({ success: true, token });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

//Route for admin login

const adminLogin = async (req, res) => {};

export { adminLogin, loginUser, registerUser };
