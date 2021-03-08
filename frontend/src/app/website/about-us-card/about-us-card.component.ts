import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CurriculumCardComponent } from '../curriculum-card/curriculum-card.component';

@Component({
  selector: 'app-about-us-card',
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.scss']
})
export class AboutUsCardComponent implements OnInit {

  @Input()
  name = '';
  
  @Input()
  image = '';

  @Input()
  expertises = '';

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  onClick(curriculumDto: any) {
    const dialogRef = this.dialog.open(
      CurriculumCardComponent, {
      width: '90%',
      data: curriculumDto
    }
    );
  }

}
