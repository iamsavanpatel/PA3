import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  newProduct: any = {};

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    this.productService.createProduct(this.newProduct).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
