import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticleDto } from '../../../../dto/article.dto';
import { ArticlesService } from '../../../../services/articles.service';
import { ArticleFormComponent } from '../form/article-form.component';

@Component({
  selector: 'app-articles-cards',
  templateUrl: './articles-cards.component.html',
  styleUrls: ['./articles-cards.component.scss']
})
export class ArticlesCardsComponent implements OnInit {
  @Input() 
  lawyerId = '';

  articles: ArticleDto[] = [];

  constructor(
    private dialog: MatDialog,
    private service: ArticlesService) { }

  ngOnInit() {
    this.laodCards();
  }

  onDelete(id: string) {
    this.service.delete(id)
      .toPromise()
      .then(_ => this.laodCards());
  }

  onAdd() {
    this.dialog.open(
      ArticleFormComponent, {
      width: '50%',
      data: {id: '', lawyerId: this.lawyerId}
    }).afterClosed().toPromise().then(_ => this.laodCards());
  }

  onEdit(id: string) {
    this.dialog.open(
      ArticleFormComponent, {
        width: '50%',
        data: {id, lawyerId: this.lawyerId}
      }
    ).afterClosed().toPromise().then(_ => this.laodCards());
  }

  laodCards() {
    this.service.getWithFilter([{key: 'lawyerId', value: this.lawyerId}])
      .toPromise()
      .then(articles => {
        this.articles = articles;
      });
  }
}
