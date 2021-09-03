import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LawyerDto } from 'src/app/dto/lawyer.dto';
import { ResumeDto } from 'src/app/dto/resume.dto';
import { SchoolingDto } from 'src/app/dto/schooling.dto';
import { LawyersService } from 'src/app/services/lawyers.service';
import { ResumesService } from 'src/app/services/resumes.service';
import { SchoolingService } from 'src/app/services/schooling.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  lawyer: LawyerDto | undefined;
  resumes: ResumeDto[] = [];
  schooling: SchoolingDto[] = [];
  lawyerImage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private resumesService: ResumesService,
    private lawyersService: LawyersService,
    private schoolingService: SchoolingService
  ) { }

  ngOnInit(): void {
    const lawyerId = this.route.snapshot.params.lawyerId;

    this.lawyersService.getId(lawyerId)
    .toPromise().then(lawyer => {
      this.lawyer = lawyer;
    });

    this.resumesService.getWithFilter([{key: 'lawyerId', value: lawyerId}])
      .toPromise().then(resumes => this.resumes = resumes)

    this.schoolingService.getWithFilter([{key: 'lawyerId', value: lawyerId}])
      .toPromise().then(schooling => this.schooling = schooling)
  }

  onClose() {
    this.router.navigate(['./website/index']);
  }
}
