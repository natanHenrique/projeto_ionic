import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public numero1: number;
  public numero2: number;
  public operacao: string;
  public result: number;
  

  constructor(public alertController: AlertController) {}

   async vaiFormulario(){
    
    if(this.operacao == 'add'){
      this.result = this.numero1 + this.numero2;
    }else if(this.operacao == 'sub'){
      this.result = this.numero1 - this.numero2;
    }else if(this.operacao == 'mul'){
      this.result = this.numero1 * this.numero2;
    }else{
      this.result = this.numero1 / this.numero2;
    }

    console.log(this.result);

      //template string
      //const numero =  `${this.numero1} e ${this.numero2}.`

      const alert = await this.alertController.create({
        header: 'Alerta!',
        message: `O resultado da operação é: ${this.result}`,
        buttons: ['OK']
      });
  
      await alert.present();
    }

  }

