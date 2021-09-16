import { Component, OnInit } from '@angular/core';
import { ViewArticleDto } from 'src/app/dto/view-article.dto';
import { ViewArticlesService } from 'src/app/services/view-articles.service';

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.scss']
})
export class ArticlePostComponent implements OnInit {
  articles: ViewArticleDto[] = [];
  
  constructor(
    private service: ViewArticlesService
  ) { }

  ngOnInit(): void {
    this.service.getAll()
      .toPromise()
      .then(articles => this.articles = articles)
   }

}
