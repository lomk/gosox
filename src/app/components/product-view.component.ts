import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Product} from "../entities/product";
import {ProductService} from "../services/product.service";


@Component({
  selector: 'app-product-view',
  templateUrl: '../html/product-view.component.html'
})
export class ProductViewComponent implements OnInit, OnDestroy {
  isActive: Boolean = false;
  isSelected: Boolean = false;
  private subscription: Subscription;

  @Input() product: Product;
  @Input() products: Product[];
  // @Output() deleteEvent = new EventEmitter<Product>();
  // @Output() updateEvent = new EventEmitter<Product>();

  constructor(
    private router: Router,
    private productService: ProductService,

  ){}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  // delete(){
  //   this.deleteEvent.emit(this.product);
  // }
  //
  // update(){
  //   this.updateEvent.emit(this.product);
  // }

  select(){
    if (this.isSelected === false) {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
  }

  setActive(){
    this.isActive = true;
  }

  unSetActive(){
    this.isActive = false;
  }
}
