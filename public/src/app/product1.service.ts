import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product1 } from './product1'

@Injectable()
export class Product1Service {

  constructor(private _http: Http) { }

  getProduct1Bids(callback){
    this._http.get('/getprod1').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
  getProduct2Bids(callback){
    this._http.get('/getprod2').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
  getProduct3Bids(callback){
    this._http.get('/getprod3').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
  createProd1(product11: Product1, callback){
    this._http.post('/createprod1', product11).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    )
  }
  createProd2(product22: Product1, callback){
    this._http.post('/createprod2', product22).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    )
  }
  createProd3(product33: Product1, callback){
    this._http.post('/createprod3', product33).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    )
  }
  gethigh1(callback){
    this._http.get('/get1').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
  gethigh2(callback){
    this._http.get('/get2').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
  gethigh3(callback){
    this._http.get('/get3').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
  removeAll(callback){
    this._http.delete('/remove').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

}
