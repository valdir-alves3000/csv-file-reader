import { getCustomRepository } from 'typeorm';
import { QuestionsRepository } from '../repositories/QuestionsRepository';

class CountQuestionsService {
  async excute(data: any[]) {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const countQuestions = await questionsRepository.count({
      where: data ? JSON.parse(JSON.stringify(data[0])): {},
    })

    return countQuestions;
  }
}

export { CountQuestionsService };