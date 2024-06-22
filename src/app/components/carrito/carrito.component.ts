import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { CartItem } from '../../models/cartitem';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html'
})
export class CarritoComponent {
@Input() items:CartItem[] = []
@Output() idProductoEventEmitter = new EventEmitter();
onDeleteCarrito(id:number){
  this.idProductoEventEmitter.emit(id);
}
}
