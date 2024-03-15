import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({
    name: 'maritalStatus',
})
export class MaritalStatusEntity {
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

    @ApiProperty({ type: 'string', default: null })
    @Column({ nullable: true, default: null })
    description: string | null;

    @ApiProperty({ type: 'integer' })
    @Column()
    userId: number;

    @CreateDateColumn()
    createdAt: Date | null;

    @UpdateDateColumn()
    updatedAt: Date | null;

    @ApiProperty({ type: 'string', format: 'date-time', default: null })
    @DeleteDateColumn()
    deletedAt: Date | null;
}
