import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { ContentsModule } from './contents/contents.module';


@Module({
  imports: [
    ContentsModule,
    ArticlesModule
  ],
  exports: [ 
    ContentsModule,
    ArticlesModule
  ]
})
export class BlogModule {}
