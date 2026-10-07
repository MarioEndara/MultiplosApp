import { Component } from '@angular/core';
import { IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButton,
 } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton],
})
export class HomePage {
  constructor() { }
  contador: number=0;
  aumentar():void{
    this.contador++;
  }
  disminuir():void{
    this.contador--;
}
reiniciar():void{
  this.contador=0;
}
}
