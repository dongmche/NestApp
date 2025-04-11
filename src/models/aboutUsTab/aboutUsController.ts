import { Controller } from '@nestjs/common';
import { GenericController } from '../generics/generic.controller';
import { AboutUsTabentity } from './entities/aboutUsTabentity';
import { CreatAboutUsDto } from './dto/creat-about-us.dto';
import { UpdateAboutUsDto } from './dto/update-about-us.dto';
import { ResponseAboutUsDto } from './dto/response-about-us.dto';
import { AboutUsService } from './about-us.service';

@Controller('about-us-tab')
export class AboutUsController extends GenericController<
  AboutUsTabentity,
  CreatAboutUsDto,
  UpdateAboutUsDto,
  ResponseAboutUsDto
> {
  constructor(protected readonly aboutUsService: AboutUsService) {
    super(aboutUsService); // Pass the service instance to parent
  }
}
