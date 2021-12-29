import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ViewArticleDto } from 'src/app/dto/view-article.dto';

@Component({
  selector: 'app-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrls: ['./blog-menu.component.scss']
})
export class BlogMenuComponent implements OnInit {
  lastArticle: ViewArticleDto | undefined;
 
  @Input()
  showWebSite: Boolean = true;

  @Input()
  showHome: Boolean = true;

  @Input()
  showArticles: Boolean = true;

  @ViewChild('drawer')
  sidenav: MatSidenav | undefined;

  drawerOpened = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay());

  @Output()
  clickMenuItem = new EventEmitter();

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {  }

  closeNavBar() {
    (this.sidenav as MatSidenav).close();
    this.drawerOpened = false;
  }

  openNavBar() {
    if (this.drawerOpened) {
      (this.sidenav as MatSidenav).open();
    }
  }

  onClickHome() {
    this.router.navigate(['./index/blog']);
  }

  onClickWebSite() {
    this.router.navigate(['./index']);
  }

  onClickArticles() {
    this.router.navigate(['./index/blog/articles']);
  }
}
