import { IsNotEmpty, IsString, Length } from "class-validator";
import { CategoryStatus } from "src/enum/categoryStatus.enum";

export class UpdateCategoryDto{
    @IsNotEmpty({message:'The category name is required'})
    @Length(3,100,{message : 'The length of the field should be between 3 and 100 characters.' })
    catName : string;

    status : CategoryStatus;

    @IsNotEmpty({message:'The category image is required'})
    image : string;
}