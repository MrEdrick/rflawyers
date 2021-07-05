import { Component, OnInit } from '@angular/core';
import { ResumeDto } from '../dto/resume.dto';
import { ResumesService } from '../../services/resumes.service';
import { MatDialog } from '@angular/material/dialog';
import { ResumeFormComponent } from '../form/resume-form.component';

@Component({
  selector: 'app-resumes-cards-with-detail',
  templateUrl: './resumes-cards-with-detail.component.html',
  styleUrls: ['./resumes-cards-with-detail.component.scss']
})
export class ResumesCardsWithDetailComponent implements OnInit {
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
    const dialogRef = this.dialog.open(
      ResumeFormComponent, {
      width: '30%',
      data: ''
    }).afterClosed().toPromise().then(_ => this.laodCards());
  }

  onDblClick(id: string) {
    this.dialog.open(
        ResumeFormComponent, {
        width: '30%',
        data: id
      }
    ).afterClosed().toPromise().then(_ => this.laodCards());
  }

  laodCards() {
    this.service.getAll()
      .toPromise()
      .then(resumes => this.resumes = resumes);
  }
}
