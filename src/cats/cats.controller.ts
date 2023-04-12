import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entity/cats.entity';

@Controller('cats')
export class CatsController {
    constructor(private catService: CatsService){}

    @Get()
    findAll(): Promise<Cat[]>{
        return this.catService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : number): Promise<Cat>{
        return this.catService.findOne(id);
    }

    @Post()
    create(@Body() cat : Cat){
        this.catService.create(cat);
    }

    @Delete(':id')
    delete(@Param('id') id : number){
        this.catService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() cat : Cat){
        this.catService.update(id, cat);
        return `This action update`;
    }
    
}
