import { Request, Response } from 'express';
import { ListUsersService } from '../services/ListUsersService';

class ListUsersController {

  async handle(req: Request, res: Response) {
    const id  = req.query.id as string;

    const listUsersService = new ListUsersService();

    const users = await listUsersService.excute( id );

    return res.json(users);
  }
}

export { ListUsersController };