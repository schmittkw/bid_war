import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Product1 } from '../product1';
import { Product1Service } from '../product1.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;

  currentUser: User = new User();
  newUser:User = new User();
  errors = [];
  product:Product1 = new Product1();
  product1s: Product1[];
  product2s: Product1[];
  product3s: Product1[];
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
    this.setCurrentUser();
    // console.log(this.currentUser)
    this.getProduct1Bids();
    this.getProduct2Bids();
    this.getProduct3Bids();
  }

  setCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
    if (this.currentUser === null) {
      this._router.navigateByUrl('/');
    }
  }
  logout() {
    this._userService.logout(res => this._router.navigateByUrl('/'));
  }
  getProduct1Bids(){
    this._product1Service.getProduct1Bids(prod => this.product1s = prod)
  }
  getProduct2Bids(){
    this._product1Service.getProduct2Bids(prod => this.product2s = prod)
  }
  getProduct3Bids(){
    this._product1Service.getProduct3Bids(prod => this.product3s = prod)
  }
  makeProd1(){
    this.errors = [];
    console.log('started 1 function')
    this._product1Service.createProd1(this.product11, (prod) => {
      console.log(prod)
      if (prod.errors) {
        for (const key of Object.keys(prod.errors)) {
          const error = prod.errors[key];
          this.errors.push(error.message);
        }
      }
      else {
        this.getProduct1Bids()
        this._router.navigateByUrl('/dashboard');
      }
    });
  }
  makeProd2(){
    this.errors = [];
    console.log('started 2 function')
    this._product1Service.createProd2(this.product22, (prod) => {
      console.log(prod)
      if (prod.errors) {
        for (const key of Object.keys(prod.errors)) {
          const error = prod.errors[key];
          this.errors.push(error.message);
        }
      }
      else {
        this.getProduct2Bids()
        this._router.navigateByUrl('/dashboard');
      }
    });
  }
  makeProd3(){
    this.errors = [];
    console.log('started 3 function')
    this._product1Service.createProd3(this.product33, (prod) => {
      console.log(prod)
      if (prod.errors) {
        for (const key of Object.keys(prod.errors)) {
          const error = prod.errors[key];
          this.errors.push(error.message);
        }
      }
      else {
        this.getProduct3Bids()
        this._router.navigateByUrl('/dashboard');
      }
    });
  }
  endBid(){
    if(this.product1s.length == 0 || this.product2s.length == 0 || this.product3s.length == 0){
      alert('You cannot end bidding with empty bid!!!');
    }
    else{
      console.log(this.product1s)
      this._router.navigateByUrl('/end-bid');
    }
  }
}
