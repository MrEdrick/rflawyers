import { Component, OnInit } from '@angular/core';
import { ViewArticleDto } from 'src/app/dto/view-article.dto';
import { ViewArticlesService } from 'src/app/services/view-articles.service';

@Component({
  selector: 'app-articles-menu',
  templateUrl: './articles-menu.component.html',
  styleUrls: ['./articles-menu.component.scss']
})
export class ArticlesMenuComponent implements OnInit {
  lastArticle: ViewArticleDto | undefined;

  constructor(
    private service: ViewArticlesService) { }

  ngOnInit(): void {
    this.recoverLastArticle();
   }

  recoverLastArticle() {
    this.service.getWithFilter([
        {key: "orderBySort", value: "articleDate"},
        {key: "orderByOrder", value: "DESC"},
        {key: "paginationSkip", value: 0},
        {key: "paginationTake", value: 1}])
      .toPromise()
      .then((result: [ViewArticleDto[], number]) => {
        this.lastArticle = result[0][0];
      })
  }
}
