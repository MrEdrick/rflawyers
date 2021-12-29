import { Module } from '@nestjs/common';
import { UserAuthModule } from '../user-auth/user-auth.module';
import { FileRepository } from './file.repository';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';

@Module({
  imports: [
    UserAuthModule
  ],
  controllers: [
    FilesController
  ],
  providers: [
    FilesService, 
    FileRepository
  ]
})
export class FilesModule { }
