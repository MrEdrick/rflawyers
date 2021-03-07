import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { UserDto } from '../dto/user.dto';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss']
})
export class UsersCardsComponent implements OnInit {

  users: UserDto[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAll()
      .toPromise()
      .then(users => {
        this.users = users;
      });
  }

  onDelete(id: string) {
    this.usersService.delete(id)
      .toPromise()
      .then(users => console.log(users));
  }

  onDblClick(id: string) {
    this.router.navigate(['./user', id], { relativeTo: this.route });
  }
}
