import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LawyerDto } from 'src/app/dto/lawyer.dto';
import { ResumeDto } from 'src/app/dto/resume.dto';
import { ResumesService } from 'src/app/services/resumes.service';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-about-us-card',
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.scss']
})
export class AboutUsCardComponent implements OnInit {
  @Input()
  lawyerDto!: LawyerDto;

  resumeTitles = '';

  constructor(
    private dialog: MatDialog,
    private resumesService: ResumesService
  ) { 
    this.resumesService.getWithFilter([{key: 'id', value: this.lawyerDto.id}])
      .toPromise().then((resumes: ResumeDto[]) => {
        resumes.forEach((resume: ResumeDto) => {
          this.resumeTitles = this.resumeTitles + resume.title;

          if (resume.id != resumes[resumes.length - 1].id) {
            this.resumeTitles = this.resumeTitles + ', ';
          }
        });
      });
  }

  ngOnInit(): void { }

  onClick() {
    this.dialog.open(
      ResumeComponent, {
        width: '100%',
        height: '100%',
        maxWidth: 'none',
        data: this.lawyerDto
      }
    );
  }

}
