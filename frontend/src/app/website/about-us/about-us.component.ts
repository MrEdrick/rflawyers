import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LawyerDto } from 'src/app/dto/lawyer.dto';
import { LawyersService } from 'src/app/services/lawyers.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  @ViewChild('cardListContainer')
  cardListContainerRef: ElementRef | undefined;

  lawyers: LawyerDto[] = [];

  constructor(
    private lawyersService: LawyersService
  ) { }

  ngOnInit(): void { 
    this.lawyersService.getAll()
      .toPromise()
      .then(lawyers => {
        this.lawyers = lawyers;
      });
  }

  scrollToLeft() {
    this.cardListContainerRef?.nativeElement.scrollBy({
      left: -316,
      behavior: 'smooth'
    });
  }

  scrollToRigth() {
    this.cardListContainerRef?.nativeElement.scrollBy({
      left: 316,
      behavior: 'smooth'
    });
  }

}
