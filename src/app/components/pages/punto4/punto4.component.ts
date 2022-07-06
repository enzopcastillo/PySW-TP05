import { Component, OnInit } from '@angular/core';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  text!: string;
  voiceCode: string = 'en-US-1';
  resultado!: string;

  constructor(private audioService: TextToSpeechService) {}

  convert(){
    console.log(this.voiceCode);
    console.log(this.text);
    this.audioService.getAudio(this.voiceCode, this.text).subscribe(
      (result)=>{
        this.resultado = result.result['audio_url'];
        alert('Audio creado! Haga click en el link para ser redirecionado o en el boton play para escucharlo.');
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  ngOnInit(): void {}
}
