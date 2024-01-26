import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService : CategoriesService){}

    @Get()
    getAll(){
        return this.categoriesService.findAll();
    }

    @Get('/:id')
    getById(@Param('id') id : string){
        return this.categoriesService.findById(id);
    }

    @Post()
    createCategory(@Body() createCategoriesDto : CreateCategoryDto){
        return this.categoriesService.create(createCategoriesDto);
    }

    @Put('/:id')
    updateCategory(@Param('id') id : string ,@Body() updateCategoriesDto : UpdateCategoryDto){
        return this.categoriesService.update(id,updateCategoriesDto);
    }

    @Delete('/:id')
    removeCategory(@Param('id') id : string){
        return this.categoriesService.remove(id);
    }


}
