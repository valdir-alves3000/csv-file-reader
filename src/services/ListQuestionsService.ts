import { getCustomRepository } from 'typeorm';
import { QuestionsRepository } from '../repositories/QuestionsRepository';

class ListQuestionsService {
  async excute(id: string) {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const question = await questionsRepository.findOne({
      where: {
        id
      },
      relations: ["userId"]
    });
    
    if(id && question) {
      return question
    }
    
    const questions =  await questionsRepository.find({
      relations: ["userId"]
    });

    return questions;
  }
}

export { ListQuestionsService };