import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  @ViewChild('cardListContainer')
  cardListContainerRef: ElementRef | undefined;

  lawyersList = [
    {
      name: 'Vitor Rodrigues',
      image: '/assets/images/vitor.jpg',
      expertises: 'Direito Internacional, Aeronáutico, Civil, Constitucional e Eleitoral.'
    },
    {
      name: 'Helem Franceschini',
      image: '/assets/images/helem.jpg',
      expertises: 'Direito Penal, Aeronáutico, Constitucional e Civil.'
    },
    {
      name: 'Dolimar Pimentel',
      image: '/assets/images/dolimar.jpg',
      expertises: 'Direito Sindical, Civil, Constitucional e Tributário.'
    },
    {
      name: 'Dara',
      image: '/assets/images/dara.jpg',
      expertises: 'Direito Penal, Aeronáutico, Constitucional e Civil.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  scrollToLeft() {
    this.cardListContainerRef?.nativeElement.scrollBy({
      left: -308,
      behavior: 'smooth'
    });
  }

  scrollToRigth() {
    this.cardListContainerRef?.nativeElement.scrollBy({
      left: 308,
      behavior: 'smooth'
    });
  }

}
