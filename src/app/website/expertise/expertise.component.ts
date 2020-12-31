import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit {

  expertisesList = [
    "Direito Interacional",
    "Direito Aeronáutico",
    "Direito Empresarial",
    "Direito Civil",
    "Direito Eleitoral",
    "Direito Constitucional",
    "Direito Penal",
    "Direito Educacional",
    "Direito Sindical",
    "Direito do Trabalho",
    "Compliance",
    "Contencioso em Geral",
  ];

  constructor() { }

  ngOnInit(): void { }

}
