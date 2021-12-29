import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LawyerDto } from 'src/app/dto/lawyer.dto';

@Component({
  selector: 'app-about-us-card',
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.scss']
})
export class AboutUsCardComponent implements OnInit {
  @Input()
  lawyer!: LawyerDto;

  constructor
    (
      private router: Router,
      private route: ActivatedRoute ) { }

  ngOnInit(): void { }

  onClick(lawyerId: string) {
    this.router.navigate(['./resume', lawyerId], { relativeTo: this.route });
  }
}