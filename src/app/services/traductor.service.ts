import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private http: HttpClient) {}

  translate(source: string, target: string, text: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Host": "",
        "X-RapidAPI-Key": ""
      }),
    }
    const body = new HttpParams()
      .set('q', text)
      .set('target', target)
      .set('source', source);
    return this.http.post("https://google-translate1.p.rapidapi.com/language/translate/v2",body, httpOptions);
  }
}
