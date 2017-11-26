import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  // createNewUser(login: string, password: string){
  //   login = login.trim();
  //   password = password.trim();
  //   if (!login || !password) { return; }
  //   this.userService.addUser({ login, password } as User)
  //     .subscribe(user => {
  //       this.users.push(user);
  //     });
  // }
}
