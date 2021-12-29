import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { ArticleRepository } from './article.repository';
import { UserAuthModule } from '../../user-auth/user-auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserAuthModule,
    TypeOrmModule.forFeature([ArticleRepository])
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule {}
