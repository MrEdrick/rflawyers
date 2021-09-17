import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ViewArticleDto } from 'src/app/dto/view-article.dto';
import { ViewArticlesService } from 'src/app/services/view-articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent | undefined;

  articles: ViewArticleDto[] = [];
  
  constructor(
    private service: ViewArticlesService
  ) { }

  ngOnInit(): void {
    this.service.getAll()
      .toPromise()
      .then(articles => this.articles = articles)
   }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
