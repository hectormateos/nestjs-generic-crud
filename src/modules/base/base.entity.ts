import { PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

export class BaseEntity {

    @PrimaryGeneratedColumn()
    @ApiModelProperty()
    @PrimaryColumn()
    public id: number;
}