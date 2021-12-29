import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expertise-card',
  templateUrl: './expertise-card.component.html',
  styleUrls: ['./expertise-card.component.scss']
})
export class ExpertiseCardComponent implements OnInit {

  @Input()
  expertise = '';
  
  constructor() { }

  ngOnInit(): void { }

}
