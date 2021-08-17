import { Request, Response } from 'express';
import { CountQuestionsService } from '../services/CountQuestionsService';

class CountQuestionsController {
  async handle(req: Request, res: Response) {
    const {
      questionOne,
      questionTwo,
      questionThreen,
      questionThreenOne,
      questionThreenTwo,
      questionFour,
      month,
      userId
    } = req.body;

    const data = [{
      questionOne,
      questionTwo,
      questionThreen,
      questionThreenOne,
      questionThreenTwo,
      questionFour,
      month
    }];

    const countQuestionsService = new CountQuestionsService();

    const countQuestions = await countQuestionsService.excute(data);

    return res.json(countQuestions);

  }
}

export { CountQuestionsController };