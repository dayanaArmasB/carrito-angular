import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [],
  templateUrl: './producto-card.component.html'
})
export class ProductoCardComponent {
  @Input() producto!:Producto;

  @Output() productoEventEmitter: EventEmitter<Producto>= new EventEmitter();

  onAgregarCarrito(producto:Producto){
    this.productoEventEmitter.emit(producto);
  }
}
