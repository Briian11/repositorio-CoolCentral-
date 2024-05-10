import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Catalogo } from '../../common/catalogo';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  

  constructor(private dataservice: DataService){}
  bdata!: Catalogo; 
  ngOnInit(): void {
    this.loadcatalogo() 
  }

  loadcatalogo(){
    this.dataservice.getCatalogo().subscribe(
      {
        next: (data) => {
          this.bdata = data
        }, 
        error : (err) => {
          console.log(err)
        }, 
        complete : () => {
          console.log('completed')
        }
      }

    )
  }
}
