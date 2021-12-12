import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ViewArticleDto } from 'src/app/dto/view-article.dto';
import { ViewArticlesService } from 'src/app/services/view-articles.service';

@Component({
  selector: 'app-articles-menu',
  templateUrl: './articles-menu.component.html',
  styleUrls: ['./articles-menu.component.scss']
})
export class ArticlesMenuComponent implements OnInit {
  lastArticle: ViewArticleDto | undefined;

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
    private breakpointObserver: BreakpointObserver,
    private service: ViewArticlesService) { }

  ngOnInit(): void {
    this.recoverLastArticle();
   }

  recoverLastArticle() {
    this.service.getWithFilter([
        {key: "orderBySort", value: "articleDate"},
        {key: "orderByOrder", value: "DESC"},
        {key: "paginationSkip", value: 0},
        {key: "paginationTake", value: 1}])
      .toPromise()
      .then((result: [ViewArticleDto[], number]) => {
        this.lastArticle = result[0][0];
      })
  }

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
}
