import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { productos } from '../data/producto.data';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  findAll():Producto[]{
    return productos;
  }
}
