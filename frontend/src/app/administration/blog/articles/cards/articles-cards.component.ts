import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto } from '../../../../dto/article.dto';
import { ArticlesService } from '../../../../services/articles.service';

@Component({
  selector: 'app-articles-cards',
  templateUrl: './articles-cards.component.html',
  styleUrls: ['./articles-cards.component.scss']
})
export class ArticlesCardsComponent implements OnInit {
  articles: ArticleDto[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ArticlesService) { }

  ngOnInit() {
    this.laodCards();
  }

  onDelete(id: string) {
    this.service.delete(id)
      .toPromise()
      .then();
  }

  onDblClick(id: string) {
    this.router.navigate(['./article', id], { relativeTo: this.route });
  }

  laodCards() {
    this.service.getAll()
      .toPromise()
      .then(articles => {
        this.articles = articles;
      });
  }
}
