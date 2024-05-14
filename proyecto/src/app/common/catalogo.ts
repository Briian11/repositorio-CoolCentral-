export interface Catalogo {
    productos: Producto[]
  }
  
  export interface Producto {
    id: number
    nombre: string
    imagen: string[]
    descripcion: string
    categoria: string
    precio: string
    related: Related[]
    sizing: Related[]
  }
  
  export interface Related {
    id:number
    imagen: string
  }
  
  