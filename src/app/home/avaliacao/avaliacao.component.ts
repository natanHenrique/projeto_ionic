import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: 'app-avaliacao',
    templateUrl: 'avaliacao.component.html',
    styleUrls: ['avaliacao.component.css']
})

export class AvaliacaoComponent implements OnInit{
    @Input()
    public nota = 0;
    public icones = []

    ngOnInit(){

        console.log(this.nota);

        for(let i = 0; i <= 4; i++){

            let minimo = i;
            let maximo = i + 1;
            let nomeIcone = null;

            if(this.nota <= minimo){
                nomeIcone = "heart-outline";
            }
            if(this.nota > minimo && this.nota < maximo){
                nomeIcone = "heart-half";
            }
            if(this.nota >= maximo){
                nomeIcone = "heart";
            }
            
            this.icones[i] = nomeIcone;
        }
    }
}