import { Component, Input, OnInit } from '@angular/core';
import { SchoolingFormComponent } from '../form/schooling-form.component';
import { MatDialog } from '@angular/material/dialog';
import { SchoolingDto } from 'src/app/dto/schooling.dto';
import { SchoolingService } from 'src/app/services/schooling.service';

@Component({
  selector: 'app-schooling-cards',
  templateUrl: './schooling-cards.component.html',
  styleUrls: ['./schooling-cards.component.scss']
})
export class SchoolingCardsComponent implements OnInit {
  @Input() 
  lawyerId = '';

  schooling: SchoolingDto[] = [];

  constructor(
    private dialog: MatDialog,
    private service: SchoolingService) { }

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
      SchoolingFormComponent, {
      width: '30%',
      data: {id: '', lawyerId: this.lawyerId}
    }).afterClosed().toPromise().then(_ => this.laodCards());
  }

  onEdit(id: string) {
    this.dialog.open(
      SchoolingFormComponent, {
        width: '30%',
        data: {id, lawyerId: this.lawyerId}
      }
    ).afterClosed().toPromise().then(_ => this.laodCards());
  }

  laodCards() {
    this.service.getWithFilter([{key: 'lawyerId', value: this.lawyerId}])
      .toPromise()
      .then(schooling => this.schooling = schooling);
  }
}
