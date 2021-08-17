import { Request, Response } from 'express';
import { ListQuestionsService } from '../services/ListQuestionsService';

class ListQuestionsController {

  async handle(req: Request, res: Response) {
    const id  = req.query.id as string;

    const listQuestonsService = new ListQuestionsService();

    const quetions = await listQuestonsService.excute( id );

    return res.json(quetions);
  }
}

export { ListQuestionsController };