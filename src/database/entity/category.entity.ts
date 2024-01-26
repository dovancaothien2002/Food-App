import { CategoryStatus } from "src/enum/categoryStatus.enum";
import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name :'category'})
export class Category {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id: string;
    
    @Column({name:'cat_name',unique:true})
    catName: string;

    @Column({name:'image'})
    image: string;
    
    @Column({name:'status',type:'enum',enum: CategoryStatus,default:CategoryStatus.ACTIVE})
    status: CategoryStatus;
    
    @CreateDateColumn({name:'createdate',type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdDate: Date;
    
    @UpdateDateColumn({name:'updatedate',type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedDate: Date;
}