import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `this action returns a ${id} cat`;
  }

  @Post()
  create(@Body() createDto: CreateCatDto) {
    console.log(createDto);
    return `this action adds a new cat`;
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
