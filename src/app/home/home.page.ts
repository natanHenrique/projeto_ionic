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
  public total: number;
  

  constructor(public alertController: AlertController) {}

   async vaiFormulario(){
    let total;


    switch(this.operacao){
      case "add":
        total = this.numero1 + this.numero2;
        break
      case "sub":
        total = this.numero1 - this.numero2;
        break
      case "mul":
        total = this.numero1 * this.numero2;
        break
      case "div":
        total = this.numero1 / this.numero2;
        break
      default:
        total = 0;
    }

    console.log(total);

      //template string
      //const numero =  `${this.numero1} e ${this.numero2}.`

      const alert = await this.alertController.create({
        header: `O resultado da operação é: `,
        message: total,
        buttons: ['OK']
      });
  
      await alert.present();
    }

  }

