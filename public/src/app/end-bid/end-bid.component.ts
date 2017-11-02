import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Product1 } from '../product1';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Product1Service } from '../product1.service';

@Component({
  selector: 'app-end-bid',
  templateUrl: './end-bid.component.html',
  styleUrls: ['./end-bid.component.css']
})
export class EndBidComponent implements OnInit {

  currentUser: User = new User();
  newUser:User = new User();
  errors = [];
  product:Product1 = new Product1();
  product1s: Product1 = new Product1();;
  product2s: Product1 = new Product1();;
  product3s: Product1 = new Product1();;
  product11:Product1 = new Product1();
  product22:Product1 = new Product1();
  product33:Product1 = new Product1();
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _product1Service: Product1Service,
    private _router: Router
  ) { }

  ngOnInit() {
    this.gethigh1();
    this.gethigh2();
    this.gethigh3();
    this.setCurrentUser();
  }


  setCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
    if (this.currentUser === null) {
      this._router.navigateByUrl('/');
    }
  }
  gethigh1(){
    this._product1Service.gethigh1(prod => this.product1s = prod)
  }
  gethigh2(){
    this._product1Service.gethigh2(prod => this.product2s = prod)
  }
  gethigh3(){
    this._product1Service.gethigh3(prod => this.product3s = prod)
  }
  removeAllBids(){
    this._product1Service.removeAll(prod => console.log('deleted all'))
    this._router.navigateByUrl('/dashboard');
  }
}
