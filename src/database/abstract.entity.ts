import { PrimaryGeneratedColumn } from 'typeorm';

export class AbstractEntity<T> {
  // @PrimaryColumn()  -> manually assign id with type int before save
  // @PrimaryGeneratedColumn("uuid") -> automatically generated with uuid
  @PrimaryGeneratedColumn() // -> auto generate id with type int
  id: number;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
