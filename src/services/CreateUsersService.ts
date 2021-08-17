import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

interface IUserRequest {
  id: String;
  age: Number;
  sex: String;
  school: String;
  area: String;
  office: String;
}

class CreateUsersService {
  async execute({
    id,
    age,
    sex,
    school,
    area,
    office,
  }: IUserRequest) {

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ id });

    if (userAlreadyExists) {
      //throw new Error("User already exists!");
    }

    const user = usersRepository.create({
      id,
      age,
      sex,
      school,
      area,
      office,
    });

    await usersRepository.save(user);

    return user;
  
  }
  
}

export { CreateUsersService };