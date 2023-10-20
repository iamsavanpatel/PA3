import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any = {};

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id') || ''; // Handle null value
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }

  onSubmit() {
    this.productService.updateProduct(this.product._id, this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
