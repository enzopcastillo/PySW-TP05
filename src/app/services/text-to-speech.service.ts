import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  constructor(private http: HttpClient) {}

  getAudio(voiceCode: string, text: string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Host": "",
        "X-RapidAPI-Key": ""
      }),
    }
    const body = new HttpParams()
      .set('voice_code', voiceCode)
      .set('text', text);
    return this.http.post("https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize",body, httpOptions);
  }
}
