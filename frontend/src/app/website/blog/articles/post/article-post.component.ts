import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ViewArticleDto } from 'src/app/dto/view-article.dto';
import { ViewArticlesService } from 'src/app/services/view-articles.service';

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.scss']
})
export class ArticlePostComponent implements OnInit {
  article: ViewArticleDto | undefined;

  @Input()
  articleId = ''; 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: ViewArticlesService
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.articleId = this.route.snapshot.params.id;
    }

    if (this.articleId) {
      this.service.getId(this.articleId)
        .toPromise().then(article => {
          this.article = article;
        });
    }
   }

}
