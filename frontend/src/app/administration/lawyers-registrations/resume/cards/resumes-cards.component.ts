import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeDto } from '../../../../dto/resume.dto';
import { ResumesService } from '../../../../services/resumes.service';
import { ResumeFormComponent } from '../form/resume-form.component';

@Component({
  selector: 'app-resumes-cards',
  templateUrl: './resumes-cards.component.html',
  styleUrls: ['./resumes-cards.component.scss']
})
export class ResumesCardsComponent implements OnInit {
  @Input() 
  lawyerId = '';

  resumes: ResumeDto[] = [];

  constructor(
    private dialog: MatDialog,
    private service: ResumesService) { }

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
      ResumeFormComponent, {
      width: '50%',
      data: {id: '', lawyerId: this.lawyerId}
    }).afterClosed().toPromise().then(_ => this.laodCards());
  }

  onEdit(id: string) {
    this.dialog.open(
      ResumeFormComponent, {
        width: '50%',
        data: {id, lawyerId: this.lawyerId}
      }
    ).afterClosed().toPromise().then(_ => this.laodCards());
  }

  laodCards() {
    this.service.getWithFilter([{key: 'lawyerId', value: this.lawyerId}])
      .toPromise()
      .then(resumes => {
        this.resumes = resumes;
      });
  }
}
