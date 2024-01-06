import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interfact';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ): string {
    return `this action returns a ${id} cat`;
  }

  @Post()
  @Roles(['admin'])
  async create(@Body() createDto: CreateCatDto) {
    return this.catsService.create(createDto);
  }

  @Put(`:id`)
  update(@Param(`id`) id: string, @Body() updateDto: CreateCatDto) {
    console.log(id, updateDto);
    return `this action update a cat`;
  }

  @Delete(`:id`)
  remove(@Param(`id`) id: string) {
    console.log(id);
    return `this action delete a cat`;
  }
}
