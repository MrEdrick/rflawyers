import { Module } from '@nestjs/common';
import { UserAuthModule } from './user-auth/user-auth.module';
import { FilesModule } from './files-manager/files.module';
import { EmailSenderModule } from './email-sender/email-sender.module';
import { ConfigurationsModule } from './configurations/configurations.module';

@Module({
  imports: [
    UserAuthModule,
    ConfigurationsModule,
    FilesModule,
    EmailSenderModule,
  ],
})
export class AdministrationModule {}
