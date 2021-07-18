import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LawyerDto } from 'src/app/dto/lawyer.dto';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-about-us-card',
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.scss']
})
export class AboutUsCardComponent implements OnInit {
  @Input()
  lawyer!: LawyerDto;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  onClick() {
    this.dialog.open(
      ResumeComponent, {
        width: '100%',
        height: '90%',
        data: this.lawyer
      }
    );
  }

}
