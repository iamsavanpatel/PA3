import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = {};

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) { // Check for null
      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data;
      });
    }
  }
}
