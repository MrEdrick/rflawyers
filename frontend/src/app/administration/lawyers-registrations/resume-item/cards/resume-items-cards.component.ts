import { Component, Input, OnInit } from '@angular/core';
import { ResumeItemDto } from '../dto/resume-item.dto';
import { ResumeItemsService } from '../../services/resume-items.service';
import { ResumeItemFormComponent } from '../form/resume-item-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-resume-items-cards',
  templateUrl: './resume-items-cards.component.html',
  styleUrls: ['./resume-items-cards.component.scss']
})
export class ResumeItemsCardsComponent implements OnInit {
  @Input() 
  resumeId = '';

  resumeItems: ResumeItemDto[] = [];

  constructor(
    private dialog: MatDialog,
    private service: ResumeItemsService) { }

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
      ResumeItemFormComponent, {
      width: '30%',
      data: ''
    }).afterClosed().toPromise().then(_ => this.laodCards());
  }

  onEdit(id: string) {
    this.dialog.open(
      ResumeItemFormComponent, {
        width: '30%',
        data: id
      }
    ).afterClosed().toPromise().then(_ => this.laodCards());
  }

  laodCards() {
    this.service.getWithFilter([{key: 'resumeId', value: this.resumeId}])
      .toPromise()
      .then(resumeItems => this.resumeItems = resumeItems);
  }
}
