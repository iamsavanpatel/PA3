import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  showDeleteAlert: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.showDeleteAlert = true;
      // Optionally, you can refresh the product list or perform any other action after deletion.
      // this.getProducts();
      setTimeout(() => {
        this.showDeleteAlert = false;
        this.getProducts(); // Refresh the product list after a short delay
      }, 2000); // Display the alert for 2 seconds
    });
  }
}
