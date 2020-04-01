require("dotenv").config();
let jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const Tournament = require('../models/Tournament');
require("dotenv").config();
import bcrypt from "bcrypt";

export class TournamentController {

  /// Find Tournament
  findById = async (req: any, res: any, next: any) => {
    try {
      let id = req.params.id;
      const tournament =await Tournament.findById(id);
      return res.status(200).json({
        message: "successfully Finded",
        Tournament: tournament
      });
    } catch (error) {
      next(error);
    }
  };

  // Find All Tournament
  findAll = async (req: any, res: any, next: any) => {
    try {
      let id = req.params.id;
      const tournament =await Tournament.find()
      .select('name user_id')
      .populate('user_id')
      // const Tournament =await Tournament.find().select('name email');
      
      return res.status(200).json({
        message: "successfully Finded",
        Tournament: tournament
      });
    } catch (error) {
      next(error);
    }
  };

  /// Create Tournament
  createTournaments = async (req: any, res: any, next: any) => {
    try {
      let { name,user_id } = req.body;
      const tournament = new Tournament({
        _id: new mongoose.Types.ObjectId,
        name, user_id
      });
      await tournament.save();

      return res.status(200).json({
        message: "successfully Created",
        createdTournament: tournament
      });
    } catch (error) {
      next(error);
    }
  };

  /// Update Tournament
  // updateTournaments = async (req: any, res: any, next: any) => {
  //   try {
  //     let id = req.params.id;
  //     let { name, email, number, password } = req.body;
  //     const Tournament = await Tournament.update({_id: id},{$set: {name, email, number, password}});
  //     return res.status(200).json({
  //       message: "successfully Updated",
  //       deletedTournament: Tournament
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // /// Delete Tournament
  // deleteTournaments = async (req: any, res: any, next: any) => {
  //   try {
  //     let id = req.params.id;
  //     const Tournament = await Tournament.deleteOne({ _id: id });
  //     return res.status(200).json({
  //       message: "successfully Deleted",
  //       deletedTournament: Tournament
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
