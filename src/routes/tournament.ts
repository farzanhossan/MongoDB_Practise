// import { Request, Response, NextFunction, Router } from 'express';
import express from 'express'
import { TournamentController } from '../controllers/tournamentControlller'
import { request } from 'http';

class TournamentRouter{
    public router: express.Router;
    tournamentController = new TournamentController();
    constructor(){
        this.router = express.Router();
        this.routes();

    }

    routes(){
        try {
             this.router.post('/create',this.tournamentController.createTournaments);
            //  this.router.get('/findById/:id',this.tournamentController.findById);
             this.router.get('/findAll',this.tournamentController.findAll);
            //  this.router.delete('/delete/:id',this.tournamentController.deleteTournaments);
            //  this.router.put('/update/:id',this.tournamentController.updateTournaments);

         } catch (error) {
            if (error) throw error;
        }
        
    }

}

const tournamentRouter = new TournamentRouter();
export default tournamentRouter.router;