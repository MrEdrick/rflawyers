import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void { }

}