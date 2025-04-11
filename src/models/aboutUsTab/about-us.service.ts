import { Injectable } from '@nestjs/common';
import { GenericService } from '../generics/generic.service';
import { AboutUsTabentity } from './entities/aboutUsTabentity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AboutUsMapper } from './mapper/aboutUsTab.mapper';
import { ResponseAboutUsDto } from './dto/response-about-us.dto';
import { CreatAboutUsDto } from './dto/creat-about-us.dto';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';

@Injectable()
export class AboutUsService extends GenericService<
  AboutUsTabentity,
  ResponseAboutUsDto,
  CreatAboutUsDto,
  UpdateAboutUsDto
> {
  constructor(
    @InjectRepository(AboutUsTabentity)
    protected readonly repository: Repository<AboutUsTabentity>,
    protected readonly mapper: AboutUsMapper,
  ) {
    super(repository, mapper, "aboutUs");
  }
}
