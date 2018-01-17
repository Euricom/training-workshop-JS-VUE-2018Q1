import axios from 'axios';
import { Product } from '../models/product';

class ProductService {
  getAll() {
    return axios.get('http://localhost:3000/api/products').then(res => {
      this.products = res.data.selectedProducts;
      return this.products.map(dto => {
        return new Product(dto);
      });
    });
  }

  getById(id) {
    return axios.get(`http://localhost:3000/api/products/${id}`).then(res => new Product(res.data));
  }
}

export default new ProductService();
