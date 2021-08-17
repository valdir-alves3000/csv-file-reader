import { EntityRepository, Repository } from 'typeorm';
import { Questions } from '../entities/Questions';

@EntityRepository(Questions)
class QuestionsRepository extends Repository<Questions>{}

export { QuestionsRepository };
