import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  // Create a new product
  createProduct(productData: any): Observable<any> {
    return this.http.post(this.apiURL, productData);
  }

  // Retrieve all products
  getProducts(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  // Retrieve a specific product by ID
  getProductById(productId: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${productId}`);
  }

  // Update a product by ID
  updateProduct(productId: string, productData: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${productId}`, productData);
  }

  // Delete a product by ID
  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${productId}`);
  }
}
