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
  lawyerId = '';

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
      width: '50%',
      data: {id: '', lawyerId: this.lawyerId}
    }).afterClosed().toPromise().then(_ => this.laodCards());
  }

  onEdit(id: string) {
    this.dialog.open(
      ContentFormComponent, {
        width: '50%',
        data: {id, lawyerId: this.lawyerId}
      }
    ).afterClosed().toPromise().then(_ => this.laodCards());
  }

  laodCards() {
    this.service.getWithFilter([{key: 'lawyerId', value: this.lawyerId}])
      .toPromise()
      .then(contents => {
        this.contents = contents;
      });
  }
}
