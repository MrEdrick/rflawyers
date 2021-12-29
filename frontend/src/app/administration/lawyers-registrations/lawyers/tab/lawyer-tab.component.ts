import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lawyer-tab',
  templateUrl: './lawyer-tab.component.html',
  styleUrls: ['./lawyer-tab.component.scss'],
})
export class LawyerTabComponent implements OnInit {
  lawyerId  = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() { 
    this.lawyerId = this.route.snapshot.params.id;
  }
}
