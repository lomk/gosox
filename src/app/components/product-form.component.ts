import {RoleService}        from '../services/role.service';
import {Role}               from '../entities/role';
import {ProductService}        from '../services/product.service';
import {Product}               from '../entities/product';
import {Component, OnInit}  from '@angular/core';
import {Router}             from '@angular/router';
import {NgForm}             from '@angular/forms';

@Component({
  selector: 'local-ip-form',
  templateUrl: '../templates/product-form.component.html',
  providers: [
    ProductService,
    RoleService]
})
export class ProductFormComponent implements OnInit {
  product = new Product();
  roles: Role[];
  error: String;
  currentProduct: Product;

  constructor(private router: Router,
              private productService: ProductService,
              private roleService: RoleService) {
    this.currentProduct = JSON.parse(localStorage.getItem('currentProduct'));
  }

  getData(): void {
    this.roleService.getRoles().subscribe(roles => this.roles = roles);
  }
  ngOnInit(): void {
    this.getData();
  }

  onFormSubmit(form: NgForm) {
    const newProduct = new Product();
    newProduct.productname = form.controls['productname'].value;
    newProduct.role = form.controls['role'].value;
    newProduct.password = form.controls['password'].value;
    newProduct.confirmPassword = form.controls['confirmPassword'].value;
    this.productService.create(newProduct)
      .subscribe(product => {
        this.product = product;
        this.router.navigate([this.currentProduct.role.name.toLowerCase() + '/products'])
          .catch(error =>  console.error('asdasdasdasdasd'));
      });
  }
}
