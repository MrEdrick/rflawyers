import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LawyersService } from 'src/app/services/lawyers.service';
import { LawyerDto } from '../../../../dto/lawyer.dto';

@Component({
  selector: 'app-lawyers-cards',
  templateUrl: './lawyers-cards.component.html',
  styleUrls: ['./lawyers-cards.component.scss']
})
export class LawyersCardsComponent implements OnInit {
  lawyers: LawyerDto[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private lawyersService: LawyersService) { }

  ngOnInit() {
    this.lawyersService.getAll()
      .toPromise()
      .then(lawyers => this.lawyers = lawyers);
  }

  onDelete(id: string) {
    this.lawyersService.delete(id)
      .toPromise()
      .then(lawyer => console.log(lawyer));
  }

  onDblClick(id: string) {
    this.router.navigate(['./lawyer', id], { relativeTo: this.route });
  }
}
