import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SeriesService } from "./series.service";

@Component({
    selector: 'app-series-info',
    templateUrl: 'series-info.component.html'
})

export class SeriesInfoComponent implements OnInit{
    
    private id: String;
    
    private serie = {
        id: 1,
        nome: 'Futurama',
        dataLancamento: '10 de Nov de 2020',
        temporadas: 5,
        nota: 4.0
    } 

    constructor(private activatedRoute: ActivatedRoute, private seriesService: SeriesService){}

    ngOnInit(){
        const id = this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.serie = this.seriesService.pegarSeriePorId(id);

    }
    

}