import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  subscription: Subscription;
  newUser:User = new User();
  errors: string[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  
  registerUser(){
    this.errors = [];
    this._userService.create(this.newUser, (user) => {
      if (user.errors) {
        for (const key of Object.keys(user.errors)) {
          const error = user.errors[key];
          this.errors.push(error.message);
        }
      } else {
        this._router.navigateByUrl('/dashboard');
      }
    });
  }
  
  // getUser() {
  //   this.subscription = this._route.params.subscribe(
  //     params => this._userService.findUser(params.id, res => this.newUser = res)
  //   );
  // }
}
