import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Tarhely } from './tarhely.entity';

@Controller()
export class AppController {
  
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/api/tarhely')
  allTarhely() {
    const tarhely = this.dataSource.getRepository(Tarhely);
    return tarhely.find();
  }

  @Post('/api/tarhely')
  newTarhelyApi(@Body() course: Tarhely) {
    course.id = undefined;
    const tarhely = this.dataSource.getRepository(Tarhely);
    tarhely.save(course);
  }

  @Delete('/api/tarhely/:id')
  deletTarhelyApi(@Param('id') id: number) {
    const tarhely = this.dataSource.getRepository(Tarhely);
    tarhely.delete(id);
  }



}
