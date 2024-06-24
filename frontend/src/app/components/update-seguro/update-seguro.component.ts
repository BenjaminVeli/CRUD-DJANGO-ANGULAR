import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguroService } from 'src/app/app.service';
import { Seguro } from 'src/app/Seguro';

@Component({
    selector: 'app-update-seguro',
    templateUrl: './update-seguro.component.html',
})
export class UpdateSeguroComponent{

    seguro?: any
    data: any

    constructor(private service: SeguroService, private route: ActivatedRoute, private router : Router) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params['id'];
        this.service.getSeguro(id).subscribe(data => {
          this.seguro = data
          console.log(this.seguro)
        })
      }
    
      form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        cost: new FormControl('', [Validators.required]),
      })
    
      submit(){
        this.data = this.form.value
        this.seguro.name = this.data.name
        this.seguro.cost = this.data.cost
        console.log(this.data)
        
        this.service.updateSeguro(this.seguro?.id, this.seguro).subscribe(data => {
          console.log(data)
        })
    
        this.router.navigate(['/seguros']);
    }
    
}