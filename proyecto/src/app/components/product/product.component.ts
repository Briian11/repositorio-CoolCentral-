import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
// ngOnInit(): void {
//   this.loadProductos(); 

// }

// loadProductos():void{
//   this.activeRoute.params.subscribe(params => {
//     const id = +params['id']; // El "+" convierte el parámetro a número
//     if (!isNaN(id)) {
//       // Obtener el producto correspondiente al índice
//       this.dataService.getProducto(id).subscribe(Productos => {
//         this.producto1 = Productos;
//       });
//     } else {
//       console.error('ID de producto inválido');
//     }
//   });
// }
// producto1 !: Producto; 


// constructor(
//   private dataService: DataService,
//   private activeRoute: ActivatedRoute,
//   private router: Router) { 
//   } 
}
