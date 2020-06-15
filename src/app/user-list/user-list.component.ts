import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: string[];

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.users.subscribe((users) => { this.users = users; });
  }

}
