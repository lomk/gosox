import { Component, OnInit }          from '@angular/core';

import { DeliveryType }               from '../entities/delivery-type';
import { DeliveryTypeService }        from '../services/delivery-type.service';
import {Router}                       from '@angular/router';
import {User}                         from "../entities/user";

@Component({
  selector: 'app-delivery-type',
  templateUrl: '../html/delivery-type.component.html' ,
  providers: [DeliveryTypeService]
})
export class DeliveryTypeComponent implements OnInit {
  currentUser: User;
  deliveryTypes: DeliveryType[];
  selectedDeliveryType: DeliveryType;
  restError: String;

  constructor(
    private router: Router,
    private deliveryTypeService: DeliveryTypeService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getDeliveryTypes(): void {
    this.deliveryTypeService.getDeliveryTypes().subscribe(deliveryTypes => this.deliveryTypes = deliveryTypes,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

  ngOnInit(): void {
    this.getDeliveryTypes();

  }

  onSelect(deliveryType: DeliveryType): void {
    this.selectedDeliveryType = deliveryType;
  }

}
