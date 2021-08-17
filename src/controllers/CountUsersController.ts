import { Request, Response } from 'express';
import { CountUsersService } from '../services/CountUsersService';

class CountUsersController {

  async handle(req: Request, res: Response) {
    const {
      age,
      sex,
      school,
      area,
      office,
    } = req.body;

    const data = [{
      age,
      sex,
      school,
      area,
      office,
    }];
       
    const countUsersService = new CountUsersService();

    const countUsers = await countUsersService.excute(data);

    return res.json(countUsers);

  }
}

export { CountUsersController };