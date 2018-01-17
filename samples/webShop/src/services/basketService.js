import axios from 'axios';
import { Basket } from '../models/basket';

class BasketService {
  // eslint-disable-next-line
  get() {
    return axios.get('http://localhost:3000/api/basket').then(res => {
      return new Basket(res.data);
    });
  }
}

export default new BasketService();
