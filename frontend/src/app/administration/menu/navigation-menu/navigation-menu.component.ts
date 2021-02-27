import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from '../../user-auth/service/auth.service';
import { UserDto } from '../../configurations/users/dto/user.dto';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit, OnDestroy {
  private destroy: Subject<any> = new Subject();

  subscription: Subscription;

  pageName = 'Dashboard';

  user: UserDto;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay());

  constructor(
    private router: Router,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscription =
      this.router.events.pipe(takeUntil(this.destroy)).subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (!this.router.navigated) { this.changeDetectorRef.markForCheck(); }
        }
      });

    this.user = this.authService.getCurrentUser();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/adm/singin']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.destroy.next();
    this.destroy.complete();
  }

  onChangePageName(pageName: string) {
    this.pageName = pageName;
  }

}
