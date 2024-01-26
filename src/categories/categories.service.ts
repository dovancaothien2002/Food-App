import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../database/entity/category.entity';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import e from 'express';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoriesRepository.find();
  }

  findById(id : string): Promise<Category>{
    let findCategory = this.categoriesRepository.findOne({where : {id : id}});
    if (findCategory) {
      return findCategory;
    }else{
      return null;
    }
  }

  async create(createCategoryDto : CreateCategoryDto) {
    const createCategory = this.categoriesRepository.create({
      id : uuidv4(),
      ...createCategoryDto,
    });
    return await this.categoriesRepository.save(createCategory);
  }

  async update(id:string,updateCategoryDto : UpdateCategoryDto) {
    let findCategory = await this.categoriesRepository.findOne({where : {id : id}});
    
    if(findCategory){
      this.categoriesRepository.merge(findCategory,updateCategoryDto);
      return await this.categoriesRepository.save(findCategory);
    }else{
      return null;
    } 
  }

  async remove(id : string){
    let findCategory = await this.categoriesRepository.findOne({where : {id : id}});
    if (findCategory) {
      return await this.categoriesRepository.remove(findCategory);
    }else{
      return null;
    }
  }
}