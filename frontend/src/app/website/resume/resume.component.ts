import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LawyerDto } from 'src/app/dto/lawyer.dto';
import { ResumeDto } from 'src/app/dto/resume.dto';
import { LawyersService } from 'src/app/services/lawyers.service';
import { ResumesService } from 'src/app/services/resumes.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  lawyer: LawyerDto | undefined;
  resumes: ResumeDto[] = [];
  lawyerImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private resumesService: ResumesService,
    private lawyersService: LawyersService
  ) { }

  ngOnInit(): void {
    const lawyerId = this.route.snapshot.params.lawyerId;

    this.lawyersService.getId(lawyerId)
    .toPromise().then(lawyer => {
      this.lawyer = lawyer;
    });

    this.resumesService.getWithFilter([{key: 'lawyerId', value: lawyerId}])
      .toPromise().then(resumes => this.resumes = resumes)
  }

  onClose() {
  }
}
