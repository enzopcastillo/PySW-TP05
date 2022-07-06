import { Component, OnInit } from '@angular/core';
import { CotizacionesService } from 'src/app/services/cotizaciones.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  fromValue!: number;
  fromType!: string;
  toType!: string;
  resultado!: number;
  cotizacionARS!: number;
  cotizacionEUR!: number;

  selectDe: any[] = [
    { value: 'ARS', nombre: 'Pesos Argentinos (ARS)'},
    { value: 'USD', nombre: 'Dolares Estadounidenses (USD)'},
    { value: 'EUR', nombre: 'Euros (EUR)'},
  ]

  selectA: any[] = [
    { value: 'ARS', nombre: 'Pesos Argentinos (ARS)'},
    { value: 'USD', nombre: 'Dolares Estadounidenses (USD)'},
    { value: 'EUR', nombre: 'Euros (EUR)'},
  ]

  constructor(private cotizacionesService: CotizacionesService) {
    this.obtenerCotizaciones();
  }

  obtenerCotizacion(){
    console.log(this.fromValue);
    console.log(this.fromType);
    console.log(this.toType);
    this.cotizacionesService.getCotizacion(this.fromValue, this.fromType, this.toType).subscribe(
      (result)=>{
        this.resultado = result['result'];
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  obtenerCotizaciones(){
    this.cotizacionesService.getCotizaciones().subscribe(
      (result)=>{
        this.cotizacionARS = result.response.rates.ARS;
        console.log(this.cotizacionARS);
        this.cotizacionEUR = result.response.rates.EUR;
        console.log(this.cotizacionEUR);
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  ngOnInit(): void {}
}
