import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  scrollToElement($elementName: any): void {
    const element = document.querySelector($elementName);

    if ($elementName == 'blog') {
      this.router.navigate(['./blog'], { relativeTo: this.route });
    } else {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

}
