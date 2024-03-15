import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { SexualOrientationsEntity } from './entities/sexualOrientation.entity';

@Injectable()
export class SexualOrientatitionRepository extends Repository<SexualOrientationsEntity> {
    constructor(private dataSource: DataSource) {
        super(SexualOrientationsEntity, dataSource.createEntityManager());
    }
}
