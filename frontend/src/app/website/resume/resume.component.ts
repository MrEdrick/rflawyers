import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LawyerDto } from 'src/app/dto/lawyer.dto';
import { ResumeDto } from 'src/app/dto/resume.dto';
import { ResumesService } from 'src/app/services/resumes.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resumes: ResumeDto[] = [];

  constructor(
    private dialogRef: MatDialogRef<ResumeComponent>,
    @Inject(MAT_DIALOG_DATA) public lawyer: LawyerDto,
    private resumesService: ResumesService
  ) { }

  ngOnInit(): void {
    this.resumesService.getWithFilter([{key: 'lawyerId', value: this.lawyer.id}])
      .toPromise().then(resumes => this.resumes = resumes)
  }

  onClose() {
    this.dialogRef.close();
  }
}
