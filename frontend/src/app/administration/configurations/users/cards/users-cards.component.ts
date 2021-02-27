import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UsersService } from '../../service/users.service';
import { UserDto } from '../dto/user.dto';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss']
})
export class UsersCardsComponent implements OnInit, OnDestroy {
  private destroy: Subject<any> = new Subject();

  users: UserDto[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit() {
    this.usersService.getAll()
      .pipe(takeUntil(this.destroy))
      .subscribe(users => this.users = users);
  }

  onDelete(id: string) {
    this.usersService.delete(id)
      .pipe(takeUntil(this.destroy))
      .subscribe(users => console.log(users));
  }

  onDblClick(id: string) {
    this.router.navigate(['./user', id], { relativeTo: this.route });
  }
}
