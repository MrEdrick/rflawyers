import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @ViewChild('drawer')
  sidenav: MatSidenav | undefined;

  drawerOpened = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay());

  @Output()
  clickMenuItem = new EventEmitter();

  constructor(private breakpointObserver: BreakpointObserver,) { }

  ngOnInit(): void { }

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

  }

}
