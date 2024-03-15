import { Module } from '@nestjs/common';
import { JoiPipeModule } from 'nestjs-joi';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [JoiPipeModule, ApplicationModule],
  controllers: [],
})
export class ApiModule { }
