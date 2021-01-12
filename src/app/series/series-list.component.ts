import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';

@Component({
    selector: 'app-series-list',
    templateUrl: 'series-list.component.html'
})

export class SeriesListComponent implements OnInit{
    public series;

    constructor(private seriesService: SeriesService){}

    ngOnInit() {
       this.series = this.seriesService.pegarTodasSeries();
    }
}