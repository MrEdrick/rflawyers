import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

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
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}
