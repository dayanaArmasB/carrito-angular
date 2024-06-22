import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { CarritoComponent } from '../carrito/carrito.component';
import { CartItem } from '../../models/cartitem';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [CatalogoComponent, CarritoComponent],
  templateUrl: './cart-app.component.html'
})
export class CartAppComponent implements OnInit {
  listaProductos:Producto[] = [];
  items:CartItem[] = [];
  constructor(private productoService:ProductoService){
  }
  ngOnInit(): void {
      this.listaProductos = this.productoService.findAll();
  }
                                                        

  onAgregarCarrito(producto:Producto){
    /*const existeItem = this.items.find(item =>{
      return item.producto.id === producto.id
    })*/

    const existeItem = this.items.find(item =>item.producto.id === producto.id) 

    if(existeItem){
      //actualiza la cantidad
      this.items =  this.items.map(item =>{
        if (item.producto.id === producto.id) {
          return {...item,cantidad:item.cantidad + 1}
        }
        return item
      })

    }else{
      this.items = [...this.items,{producto: {...producto}, cantidad:1}]
    }
    
  }

  onDeleteCarrito(id:number){
    this.items = this.items.filter(item => item.producto.id !== id)
  }
}
