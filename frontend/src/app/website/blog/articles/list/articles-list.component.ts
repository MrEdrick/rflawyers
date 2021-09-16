import { Component, OnInit } from '@angular/core';
import { ViewArticleDto } from 'src/app/dto/view-article.dto';
import { ViewArticlesService } from 'src/app/services/view-articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
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
