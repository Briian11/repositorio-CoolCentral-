export interface Producto {
    id: number
    nombre: string
    imagen: string[]
    descripcion: string
    categoria: string
    precio: string
    related: Related[]
  }
  
  export interface Related {
    imagen: string
  }
  