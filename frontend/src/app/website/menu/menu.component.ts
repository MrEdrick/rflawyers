import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('drawer')
  sidenav: MatSidenav | undefined;

  drawerOpened = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay());

  @Output()
  clickMenuItem = new EventEmitter();

  constructor(private breakpointObserver: BreakpointObserver) { }

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

}
