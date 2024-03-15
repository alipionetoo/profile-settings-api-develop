import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { MaritalStatusEntity } from './entities/maritalStatus.entity';

@Injectable()
export class MaritalStatusRepository extends Repository<MaritalStatusEntity> {
    constructor(private dataSource: DataSource) {
        super(MaritalStatusEntity, dataSource.createEntityManager());
    }
}
