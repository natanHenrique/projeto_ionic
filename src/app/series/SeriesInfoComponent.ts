import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'app-series-info',
    templateUrl: 'series-info.component.html'
})


export class SeriesInfoComponent implements OnInit {

    private id: String;
    constructor(private activatedRoute: ActivatedRoute) { }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    public serie = [{
        id: 1,
        nome: 'Futurama',
        dataLancamento: '10 de Nov de 2020',
        temporadas: 5,
        nota: 4.0
    }];

}
