import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentDto } from 'src/app/dto/content.dto';
import { ViewArticleDto } from 'src/app/dto/view-article.dto';
import { ContentsService } from 'src/app/services/contents.service';
import { ViewArticlesService } from 'src/app/services/view-articles.service';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent implements OnInit {
  article: ViewArticleDto | undefined;
  contents: ContentDto[] = [];

  @Input()
  articleId = ''; 

  constructor(
    private route: ActivatedRoute,
    private service: ViewArticlesService,
    private serviceContents: ContentsService
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.articleId = this.route.snapshot.params.id;
    }

    if (this.articleId) {
      this.service.getById(this.articleId)
        .toPromise().then(article => {
          this.article = article;
          
          this.serviceContents.getWithFilter([
            {key: 'articleId', value: this.articleId},
            {key: "orderBySort", value: "order"},
            {key: "orderByOrder", value: "ASC"}])
            .toPromise().then(contents => {
              this.contents = contents;
            }
          );
        });
    }
   }

}
