import { Component, OnInit }  from '@angular/core';

import { Order }              from '../entities/order';
import { OrderService }       from '../services/order.service';
import {Router}               from '@angular/router';
import {User}                 from "../entities/user";

@Component({
  selector: 'app-order',
  templateUrl: '../html/order.component.html' ,
  providers: [OrderService]
})
export class OrderComponent implements OnInit {
  currentUser: User;
  orders: Order[];
  selectedOrder: Order;

  constructor(
    private router: Router,
    private orderService: OrderService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getOrders(): void {
    this.orderService.getOrders().subscribe(orders => this.orders = orders,
      error => {
        if ( error === 401 ) {
          this.router.navigate(['/login']);
        }
      });
  }

  ngOnInit(): void {
    this.getOrders();
  }

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

}
