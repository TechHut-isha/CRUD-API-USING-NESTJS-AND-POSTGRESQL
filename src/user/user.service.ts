import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  //inject user repository
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){
     
  }
  create(createUserDto: CreateUserDto)  : Promise<User> {
    let user : User =  new User();
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    return this.userRepository.save(user);
  }

  //return all users
  findAll() :Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User>{
    return this.userRepository.findOne({where:{id: id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user : User =  new User();
    user.name = updateUserDto.name;
    user.age = updateUserDto.age;
    user.id = id;

    //save will do two works if id doesn't exist then insert otherwise update
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
