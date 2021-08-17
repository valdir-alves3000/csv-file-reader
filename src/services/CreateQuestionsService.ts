import { getCustomRepository } from 'typeorm';
import { QuestionsRepository } from '../repositories/QuestionsRepository';

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


class CreateQuestionsService {
  async execute({
    user_id,
    questionOne,
    questionTwo,
    questionThreen,
    questionThreenOne,
    questionThreenTwo,
    questionFour,
    month,
  }: IQuestions) {

    const questionsRepository = getCustomRepository(QuestionsRepository);

    const questionAlreadyExists = await questionsRepository.findOne({ user_id });

    if (questionAlreadyExists) {
      throw new Error("Question already exists!");
    }

    const question = questionsRepository.create({
      user_id,
      questionOne,
      questionTwo,
      questionThreen,
      questionThreenOne,
      questionThreenTwo,
      questionFour,
      month
    });

    await questionsRepository.save(question);

    return question;
  }
}

export { CreateQuestionsService };