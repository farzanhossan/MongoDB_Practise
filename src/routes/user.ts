// import { Request, Response, NextFunction, Router } from 'express';
import express from 'express'
import { UserController } from '../controllers/userControlller'
import { request } from 'http';

class UserRouter{
    public router: express.Router;
    userController = new UserController();
    constructor(){
        this.router = express.Router();
        this.routes();

    }

    routes(){
        try {
             this.router.post('/create',this.userController.createUsers);
             this.router.get('/findById/:id',this.userController.findById);
             this.router.get('/findAll',this.userController.findAll);
             this.router.delete('/delete/:id',this.userController.deleteUsers);
             this.router.put('/update/:id',this.userController.updateUsers);

         } catch (error) {
            if (error) throw error;
        }
        
    }

}

const userRouter = new UserRouter();
export default userRouter.router;