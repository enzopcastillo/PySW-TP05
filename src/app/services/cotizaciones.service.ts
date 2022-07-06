import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {

  constructor(private http: HttpClient) {}

  getCotizacion(fromValue: number, fromType: string, toType: string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Host": "",
        "X-RapidAPI-Key": ""
      })
    };
    const body = new HttpParams()
      .set('from-value', fromValue)
      .set('from-type', fromType)
      .set('to-type', toType);
    return this.http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body, httpOptions);
  }

  getCotizaciones():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': '',
        'X-RapidAPI-Key': ''
      })
    };
    return this.http.get("https://currencyscoop.p.rapidapi.com/latest", httpOptions);
  }
}
