import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {

  constructor(@InjectRepository(Profile) private readonly profileRepository: Repository<Profile>){

  }

  create(createProfileDto: CreateProfileDto) : Promise<Profile> {
    let profile : Profile = new Profile();
    profile.gender = createProfileDto.gender;
    profile.photo = createProfileDto.photo;
    return this.profileRepository.save(profile);
  }

  findAll() : Promise<Profile[]> {
    return this.profileRepository.find();
  }

  findOne(id: number) {
    return this.profileRepository.findOne({where:{id: id}});
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    let profile : Profile = new Profile();
    profile.gender = updateProfileDto.gender;
    profile.photo = updateProfileDto.photo;
    profile.id = id;
    return this.profileRepository.save(profile);
  }

  remove(id: number) {
    return this.profileRepository.delete(id);
  }
}
