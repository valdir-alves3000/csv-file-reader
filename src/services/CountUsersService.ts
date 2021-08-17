import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class CountUsersService {
  async excute(data: any[]) {
    const usersRepository = getCustomRepository(UsersRepository);

    const countusers = await usersRepository.count({
      where: data ? JSON.parse(JSON.stringify(data[0])): {},
    });

    return countusers;
  }
}

export { CountUsersService };