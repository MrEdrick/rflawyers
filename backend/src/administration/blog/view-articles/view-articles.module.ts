import { Module } from '@nestjs/common';
import { ViewArticlesController } from './view-articles.controller';
import { ViewArticlesService } from './view-articles.service';
import { ViewArticleRepository } from './view-article.repository';
import { UserAuthModule } from '../../user-auth/user-auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserAuthModule,
    TypeOrmModule.forFeature([ViewArticleRepository])
  ],
  controllers: [ViewArticlesController],
  providers: [ViewArticlesService]
})
export class ViewArticlesModule {}
