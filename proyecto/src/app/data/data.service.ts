import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catalogo } from '../common/catalogo';
import { Observable, map } from 'rxjs';
import { Producto } from '../common/producto';


@Injectable({
  providedIn: 'root'
})
export class DataService {


   private url = './assets/datos.json';

  constructor(private http: HttpClient){}

  
  public getCatalogo():Observable<Catalogo>{
    return this.http.get<Catalogo>('./assets/datos.json'); 
  }

  public getProducto(id: number): Observable<Producto> {
    return this.http.get<Catalogo>(this.url).pipe(
      map((productos: Catalogo) => {
        if (id >= 0 && id < productos.productos.length+1) {
          return productos.productos[id - 1];
        } else {
          throw new Error('ID de producto fuera de rango');
        }
      })
    );
  }
}
