import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-card',
  templateUrl: './curriculum-card.component.html',
  styleUrls: ['./curriculum-card.component.scss']
})
export class CurriculumCardComponent implements OnInit {

  @Input()
  name = '';
  
  @Input()
  image = '';

  @Input()
  expertises = '';

  constructor() { }

  ngOnInit(): void { }

}
