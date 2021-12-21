import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { ContentsModule } from './contents/contents.module';
import { ViewArticlesModule } from './view-articles/view-articles.module';


@Module({
  imports: [
    ContentsModule,
    ArticlesModule,
    ViewArticlesModule
  ],
  exports: [ 
    ContentsModule,
    ArticlesModule,
    ViewArticlesModule
  ]
})
export class BlogModule {}
