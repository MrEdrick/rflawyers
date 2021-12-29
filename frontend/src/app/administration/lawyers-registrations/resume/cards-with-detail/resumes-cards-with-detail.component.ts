import { Component, OnInit } from '@angular/core';
import { ResumeDto } from '../../../../dto/resume.dto';
import { ResumesService } from '../../../../services/resumes.service';
import { MatDialog } from '@angular/material/dialog';
import { ResumeFormComponent } from '../form/resume-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resumes-cards-with-detail',
  templateUrl: './resumes-cards-with-detail.component.html',
  styleUrls: ['./resumes-cards-with-detail.component.scss']
})
export class ResumesCardsWithDetailComponent implements OnInit {
  lawyerId  = '';
  resumeSelected!: ResumeDto;
  resumes: ResumeDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private service: ResumesService) { }

  ngOnInit() {
    this.lawyerId = this.route.snapshot.params.id;
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
      width: '30%',
      data: {id: '', lawyerId: this.lawyerId}
    }).afterClosed().toPromise().then(_ => this.laodCards());
  }

  onEdit(id: string) {
    this.dialog.open(
        ResumeFormComponent, {
        width: '30%',
        data: {id, lawyerId: this.lawyerId}
      }
    ).afterClosed().toPromise().then(_ => this.laodCards());
  }

  onSelect(resume: ResumeDto) {
    this.resumeSelected = resume;
  }

  laodCards() {
    this.service.getWithFilter([{key: 'lawyerId', value: this.lawyerId}])
      .toPromise()
      .then(resumes => this.resumes = resumes);
  }
}
