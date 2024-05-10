import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../../data/data.service';
import { Producto } from '../../common/producto';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


export class ProductComponent implements OnInit{
  producto !: Producto; 
  constructor(
    private apiservice: DataService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const id = +params['id']; // El "+" convierte el parámetro a número
      if (!isNaN(id)) {
        // Obtener el producto correspondiente al índice
        this.apiservice.getProducto(id).subscribe(producto => {
          this.producto = producto;
        });
      } else {
        console.error('ID de producto inválido');
      }
    });}
 }
