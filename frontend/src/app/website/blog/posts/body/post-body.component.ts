import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewArticleDto } from 'src/app/dto/view-article.dto';
import { ViewArticlesService } from 'src/app/services/view-articles.service';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent implements OnInit {
  article: ViewArticleDto | undefined;
  
  @Input()
  articleId = ''; 

  constructor(
    private route: ActivatedRoute,
    private service: ViewArticlesService
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.articleId = this.route.snapshot.params.id;
    }

    if (this.articleId) {
      this.service.getById(this.articleId)
        .toPromise().then(article => {
          this.article = article;
        });
    }
   }

}
