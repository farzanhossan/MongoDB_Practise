require("dotenv").config();
let jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const User = require('../models/user');
require("dotenv").config();
import bcrypt from "bcrypt";

export class UserController {

  /// Find User
  findById = async (req: any, res: any, next: any) => {
    try {
      let id = req.params.id;
      const user =await User.findById(id);
      return res.status(200).json({
        message: "successfully Finded",
        User: user
      });
    } catch (error) {
      next(error);
    }
  };

  /// Find All User
  findAll = async (req: any, res: any, next: any) => {
    try {
      let id = req.params.id;
      const user =await User.find();
      // const user =await User.find().select('name email');

      return res.status(200).json({
        message: "successfully Finded",
        User: user
      });
    } catch (error) {
      next(error);
    }
  };

  /// Create User
  createUsers = async (req: any, res: any, next: any) => {
    try {
      let { name, email, password, number } = req.body;
      const user = new User({
        _id: new mongoose.Types.ObjectId,
        name: name,
        email: email,
        number: number,
        password: password
      });
      await user.save();

      return res.status(200).json({
        message: "successfully Created",
        createdUser: user
      });
    } catch (error) {
      next(error);
    }
  };

  /// Update User
  updateUsers = async (req: any, res: any, next: any) => {
    try {
      let id = req.params.id;
      let { name, email, number, password } = req.body;
      const user = await User.update({_id: id},{$set: {name, email, number, password}});
      return res.status(200).json({
        message: "successfully Updated",
        deletedUser: user
      });
    } catch (error) {
      next(error);
    }
  };

  /// Delete User
  deleteUsers = async (req: any, res: any, next: any) => {
    try {
      let id = req.params.id;
      const user = await User.deleteOne({ _id: id });
      return res.status(200).json({
        message: "successfully Deleted",
        deletedUser: user
      });
    } catch (error) {
      next(error);
    }
  };
}
