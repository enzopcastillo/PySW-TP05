import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  peliculas!:Array<Pelicula>;
  pelicula!:Pelicula;
  year: number = 2022;
  genres: string = 'comedia';

  genresList: any[] = [
    { value: 'comedia', nombre: 'Comedia'},
    { value: 'crimen', nombre: 'Crimen'},
    { value: 'historia', nombre: 'Historia'},
    { value: 'terror', nombre: 'Terror'},
  ]

  yearList: any[] = [
    { value: 2018, nombre: '2018'},
    { value: 2019, nombre: '2019'},
    { value: 2020, nombre: '2020'},
    { value: 2021, nombre: '2021'},
    { value: 2022, nombre: '2022'},
  ]

  constructor(private peliculaService: PeliculaService) {}

  cargarMovies(){
    this.peliculas = new Array<Pelicula>();
    console.log(this.genres);
    console.log(this.year);
    this.peliculaService.getMovies(this.genres, this.year).subscribe(
      (result)=>{
        result.results.forEach(element =>{
          console.log(element);
          this.pelicula = new Pelicula();
          Object.assign(this.pelicula, element);
          this.peliculas.push(this.pelicula);
        });
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  ngOnInit(): void {}
}
