import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';
  private detailsUrl = 'https://grandcircusco.github.io/demo-apis/donuts/';
  private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  getDonuts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getDonutById(id: number): Observable<any> {
    return this.http.get(`${this.detailsUrl}${id}.json`);
  }

  addToCart(donut: any): void {
    this.cart.push(donut);
    this.cartSubject.next(this.cart);
  }

  getCart(): Observable<any[]> {
    return this.cartSubject.asObservable();
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    this.cartSubject.next(this.cart);
  }
}
