import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoCardComponent } from '../producto-card/producto-card.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductoCardComponent],
  templateUrl: './catalogo.component.html'
})
export class CatalogoComponent {
  @Input() listaProductos!:Producto[];
  @Output() productoEventEmitter: EventEmitter<Producto>= new EventEmitter();

  onAgregarCarrito(producto:Producto){
    this.productoEventEmitter.emit(producto);
  }
}
