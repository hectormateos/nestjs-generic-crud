import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity('users')
export class User extends BaseEntity{

  @Column({ length: 50, default: 'default-name' })
  @ApiModelProperty()
  readonly name: string;

  @Column({ length: 50, default: 0 })
  @ApiModelProperty()
  readonly age: number;
  
  @Column({ length: 50, default: 'none' })
  @ApiModelProperty()
  readonly favouriteColor: string;

  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
}