import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  scrollToElement($elementName: any): void {
    const element = document.querySelector($elementName);

    if (element.value == '#blog') {

    } else {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

}
