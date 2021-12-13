import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentDto } from '../../../../dto/content.dto';
import { ContentsService } from '../../../../services/contents.service';
import { ContentFormComponent } from '../form/content-form.component';

@Component({
  selector: 'app-contents-cards',
  templateUrl: './contents-cards.component.html',
  styleUrls: ['./contents-cards.component.scss']
})
export class ContentsCardsComponent implements OnInit {
  @Input() 
  articleId = '';

  contents: ContentDto[] = [];

  constructor(
    private dialog: MatDialog,
    private service: ContentsService) { }

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
      ContentFormComponent, {
      width: '70%',
      data: {id: '', articleId: this.articleId}
    }).afterClosed().toPromise().then(_ => this.laodCards());
  }

  onEdit(id: string) {
    this.dialog.open(
      ContentFormComponent, {
        width: '70%',
        data: {id, articleId: this.articleId}
      }
    ).afterClosed().toPromise().then(_ => this.laodCards());
  }

  laodCards() {
    this.service.getWithFilter([{key: 'articleId', value: this.articleId}])
      .toPromise()
      .then(contents => {
        this.contents = contents;
      });
  }
}
