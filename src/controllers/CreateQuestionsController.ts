import { Request, Response } from 'express';
import { CreateQuestionsService } from '../services/CreateQuestionsService';
import { Readable } from 'stream';
import readline from 'readline';

interface IQuestions {
  user_id: String;
  questionOne: String;
  questionTwo: String;
  questionThreen: String;
  questionThreenOne: String;
  questionThreenTwo: String;
  questionFour: String;
  month: String;
}

class CreateQuestionsController {
  async handle(req: Request, res: Response) {
    const { file } = req;
    const buffer = file?.buffer;

    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const questionsLine = readline.createInterface({
      input: readableFile
    });

    const questions: IQuestions[] = [];

    for await (let line of questionsLine) {
      const questionsLineSplit = line.split(',');

      questions.push({
        user_id: questionsLineSplit[0],
        questionOne: questionsLineSplit[1],
        questionTwo: questionsLineSplit[2],
        questionThreen: questionsLineSplit[3],
        questionThreenOne: questionsLineSplit[4],
        questionThreenTwo: questionsLineSplit[5],
        questionFour: questionsLineSplit[6],
        month: questionsLineSplit[7],
      })
    }

    const createQuestionsService = new CreateQuestionsService();
    for await (let {
      user_id,
      questionOne,
      questionTwo,
      questionThreen,
      questionThreenOne,
      questionThreenTwo,
      questionFour,
      month,
    } of questions) {

      await createQuestionsService.execute({
        user_id,
        questionOne,
        questionTwo,
        questionThreen,
        questionThreenOne,
        questionThreenTwo,
        questionFour,
        month,
      });
    }

    return res.json(questions);
  }
}

export { CreateQuestionsController };