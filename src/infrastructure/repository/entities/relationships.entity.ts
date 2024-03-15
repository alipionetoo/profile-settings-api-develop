import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({
    name: 'relationships',
})
export class RelationshipsEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @ApiProperty({ type: 'string' })
    @Column()
    name: string;

    @ApiProperty({ type: 'integer' })
    @Column({
        type: 'boolean',
        default: true
    })
    status: boolean;

    @CreateDateColumn()
    createdAt: Date | null;

    @UpdateDateColumn()
    updatedAt: Date | null;

    @ApiProperty({ type: 'string', format: 'date-time', default: null })
    @DeleteDateColumn()
    deletedAt: Date | null;
}

