import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { RelationshipsEntity } from './entities/relationships.entity';

@Injectable()
export class RelationshipsRepository extends Repository<RelationshipsEntity> {
    constructor(private dataSource: DataSource) {
        super(RelationshipsEntity, dataSource.createEntityManager());
    }
}
