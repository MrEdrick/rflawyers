import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
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
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent | undefined;

  articles: ViewArticleDto[] = [];
  
  constructor(
    private router: Router,
    private service: ViewArticlesService
  ) { }

  ngOnInit(): void {
    this.loadList();
  }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  loadList() {
    this.service.getWithFilter([
        {key: "orderBySort", value: "articleDate"},
        {key: "orderByOrder", value: "DESC"},
        {key: "paginationSkip", value: this.pageIndex},
        {key: "paginationTake", value: this.pageSize}])
      .toPromise()
      .then((result: [ViewArticleDto[], number]) => {
        this.articles = result[0];
        this.length = result[1];
      })
  }

  OnClickIem(articleId: string) {
    this.router.navigate(['./index/blog/articles/article', articleId]);
  }
}
