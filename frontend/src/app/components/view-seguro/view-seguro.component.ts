import { Component, OnInit } from '@angular/core';
import { SeguroService } from '../../app.service';

@Component({
    selector: 'app-view-seguro',
    templateUrl: './view-seguro.component.html',
})
export class ViewSeguroComponent {
    seguros: any | undefined;

    constructor(private seguroService: SeguroService) {
    }

    ngOnInit(): void{
        this.seguroService.getSeguros().subscribe(data => {
            this.seguros = data;
            console.log(data)
        });
    }

    deleteseguro(id: number) {
        this.seguroService.deleteSeguro(id).subscribe(data => {
            console.log(data);
            this.ngOnInit();
          });
      }
}