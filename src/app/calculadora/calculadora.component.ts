import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent {
  resultado:string = ''; // Ejemplo de lo que puede contener: 4+4
  encendido: boolean = true; // Variable para controlar el estado de encendido/apagado
  
  insertarCaracter(value: string):void { // String porque también se inserta: "+", "-", "*", ...
    if (this.encendido) {
      this.resultado += value;
    }
  }

  calcular():void {
    try {
      this.resultado = eval(this.resultado); // La librería eval hace un calculo con el string recibido, por ejemplo: 4*2. 
                                             //Esto se debe a que lo que contiene el String es código JavaScript válido.
    } catch (error) {
      this.resultado = 'Syntax error';
    }
  }

  limpiar():void {
    this.resultado = '';  // Tecla "C" de las calculadoras.
  }

  toggleEncendido(): void {
    // Cambiar el estado de encendido/apagado
    this.encendido = !this.encendido;

    // Limpiar el resultado si la calculadora está apagada
    if (!this.encendido) {
      this.resultado = '';
    }
  }

  estadoCalculadora(): boolean{
    return this.encendido;
  }
}
