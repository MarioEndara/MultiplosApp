import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonCard, 
  IonCardContent, 
  IonButton 
} from '@ionic/angular';
=======
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
>>>>>>> 166a1b8413b166233a242b33e0f05741a42f4ea7

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
<<<<<<< HEAD
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton
  ]
})
export class HomePage {
  // Inicializados explícitamente en 0 como pide el requerimiento
  mult2: number = 0;
  mult3: number = 0;
  mult5: number = 0;
  mult7: number = 0;
  mult10: number = 0;

  primos: number[] = [];

  constructor() {}

  // Suma directa del múltiplo
  incrementar(valor: number) {
    switch (valor) {
      case 2: 
        this.mult2 += 2; 
        break;
      case 3: 
        this.mult3 += 3; 
        break;
      case 5: 
        this.mult5 += 5; 
        break;
      case 7: 
        this.mult7 += 7; 
        break;
      case 10: 
        this.mult10 += 10; 
        break;
    }
  }

  calcularPrimos() {
    const listaPrimos: number[] = [];
    let n = 2;
    while (listaPrimos.length < 10) {
      let esPrimo = true;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) {
        listaPrimos.push(n);
      }
      n++;
    }
    this.primos = listaPrimos;
  }
}
=======
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
>>>>>>> 166a1b8413b166233a242b33e0f05741a42f4ea7
