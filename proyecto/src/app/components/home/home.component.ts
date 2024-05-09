import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Catalogo } from '../../common/catalogo';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  

  constructor(private dataservice: DataService){}
  productos!: Catalogo; 
  ngOnInit(): void {
    this.loadcatalogo() 
  }

  loadcatalogo(){
    this.dataservice.getCatalogo().subscribe(
      {
        next: (data) => {
            this.productos = data;
            console.log(data)
        },
        error: (err) =>{
          console.log(err)
        },
        complete: () =>{
          console.log('completed')
        }
      }

    )
  }
}
