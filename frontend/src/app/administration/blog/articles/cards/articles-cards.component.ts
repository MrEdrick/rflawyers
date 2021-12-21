import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewArticleDto } from 'src/app/dto/view-article.dto';
import { ArticlesService } from 'src/app/services/articles.service';
import { ViewArticlesService } from '../../../../services/view-articles.service';

@Component({
  selector: 'app-articles-cards',
  templateUrl: './articles-cards.component.html',
  styleUrls: ['./articles-cards.component.scss']
})
export class ArticlesCardsComponent implements OnInit {
  articles: ViewArticleDto[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ViewArticlesService,
    private articleService: ArticlesService) { }

  ngOnInit() {
    this.laodCards();
  }

  onDelete(id: string) {
    this.articleService.delete(id)
      .toPromise()
      .then(_ => this.laodCards());
  }

  onDblClick(id: string) {
    this.router.navigate(['./article', id], { relativeTo: this.route });
  }

  onClick() {
    this.router.navigate(['./article'], { relativeTo: this.route });
  }

  laodCards() {
    this.service.getAll()
      .toPromise()
      .then(articles => {
        this.articles = articles[0];
      });
  }

  onPublish(id: string) {
    this.articleService.update({id: id, published: true})
      .toPromise()
      .then(_ => this.laodCards());
  }

  onUnPublish(id: string) {
    this.articleService.update({id: id, published: false})
      .toPromise()
      .then(_ => this.laodCards());
  }
}
