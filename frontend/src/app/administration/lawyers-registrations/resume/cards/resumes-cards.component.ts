import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResumeDto } from '../dto/resume.dto';
import { ResumesService } from '../../services/resumes.service';

@Component({
  selector: 'app-resumes-cards',
  templateUrl: './resumes-cards.component.html',
  styleUrls: ['./resumes-cards.component.scss']
})
export class ResumesCardsComponent implements OnInit {
  resumes: ResumeDto[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private resumesService: ResumesService) { }

  ngOnInit() {
    this.resumesService.getAll()
      .toPromise()
      .then(resumes => this.resumes = resumes);
  }

  onDelete(id: string) {
    this.resumesService.delete(id)
      .toPromise()
      .then(resume => console.log(resume));
  }

  onDblClick(id: string) {
    this.router.navigate(['./resume', id], { relativeTo: this.route });
  }
}
