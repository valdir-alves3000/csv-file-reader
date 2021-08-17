import { Request, Response } from 'express';
import { CreateUsersService } from '../services/CreateUsersService';
import { Readable } from 'stream';
import readline from 'readline';

interface IUsers {
  id: String;
  age: Number;
  sex: String;
  school: String;
  area: String;
  office: String;
}

class CreateUsersController {
  async handle(req: Request, res: Response) {
    const { file } = req;
    const buffer = file?.buffer;

    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const usersLine = readline.createInterface({
      input: readableFile
    });

    const users: IUsers[] = [];

    for await (let line of usersLine) {
      const usersLineSplit = line.split(',');

      users.push({
        id: usersLineSplit[0],
        age: Number(usersLineSplit[1]),
        sex: usersLineSplit[2],
        school: usersLineSplit[3],
        area: usersLineSplit[4],
        office: usersLineSplit[5],
      })
    }

    const createUserservice = new CreateUsersService();
    for await (let {
      id,
      age,
      sex,
      school,
      area,
      office
    } of users) {

      await createUserservice.execute({
        id,
        age,
        sex,
        school,
        area,
        office
      });
    }

    return res.json(users);
  }
}

export { CreateUsersController };