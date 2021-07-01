import {mount} from 'products/ProductsIndex';
import {mountCart} from 'cart/CartView';

mount(document.querySelector('#prod-products'))
mountCart(document.querySelector('#cart-prod'))

console.log('Container');