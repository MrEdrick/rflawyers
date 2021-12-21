import { Module } from '@nestjs/common';
import { UserAuthModule } from './user-auth/user-auth.module';
import { FilesModule } from './files-manager/files.module';
import { EmailSenderModule } from './email-sender/email-sender.module';
import { ConfigurationsModule } from './configurations/configurations.module';
import { LawyersRegistrationsModule } from './lawyers-registrations/lawyers-registrations.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    FilesModule,
    EmailSenderModule,
    UserAuthModule,
    ConfigurationsModule,
    LawyersRegistrationsModule,
    BlogModule
  ],
})
export class AdministrationModule {}
