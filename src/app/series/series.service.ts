import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


  export class SeriesService {

    private series = [{
        id: 1,
        nome: 'Futurama',
        dataLancamento: '10 de Nov de 2020',
        temporadas: 5,
        nota: 4.0
    }, 
    {
        id: 2,
        nome: 'The Simpsons',
        dataLancamento: '10 de Dez de 1989',
        temporadas: 30,
        nota: 4.9
    },
    {
        id: 3,
        nome: 'Rick and Morty',
        dataLancamento: '10 de Fev de 2018',
        temporadas: 4,
        nota: 5
    },
    {
        id: 5,
        nome: 'Sword Art Online',
        dataLancamento: '10 de Mar de 2015',
        temporadas: 3,
        nota: 5
    }
];
  constructor(){ }

  pegarTodasSeries(){
    return this.series;
  }
  pegarSeriePorId(idSerie){
    let serie = null;

    for(let i=0; i < this.series.length; i++){

      if(this.series[i].id == idSerie){
        serie = this.series[i];
      }
    }
    return serie;
  }
}
