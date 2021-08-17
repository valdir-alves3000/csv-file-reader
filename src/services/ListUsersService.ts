import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class ListUsersService {
  async excute(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne(id);
    
    if(id && user) {
      return user
    }
    
    const users =  await usersRepository.find();

    return users;
  }
}

export { ListUsersService };