import { TypeOrmModule } from '@nestjs/typeorm';
import { JoiPipeModule } from 'nestjs-joi';
import { Module } from '@nestjs/common';
import { RelationshipsEntity } from './repository/entities/relationships.entity';
import { RelationshipsRepository } from './repository/relationships.repository';
import { SexualOrientationsEntity } from './repository/entities/sexualOrientation.entity';
import { MaritalStatusEntity } from './repository/entities/maritalStatus.entity';
import { SexualOrientatitionRepository } from './repository/sexualOrientation.repository';
import { MaritalStatusRepository } from './repository/maritalStatus.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RelationshipsEntity, SexualOrientationsEntity, MaritalStatusEntity]), JoiPipeModule],
  providers: [RelationshipsRepository, SexualOrientatitionRepository, MaritalStatusRepository],
})
export class InfrastructureModule { }