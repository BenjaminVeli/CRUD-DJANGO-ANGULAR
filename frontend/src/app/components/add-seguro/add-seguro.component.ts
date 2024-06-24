import { Component, OnInit } from '@angular/core';
import { SeguroService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-seguro',
  templateUrl: './add-seguro.component.html',
})
export class AddSeguroComponent implements OnInit{

  constructor(private seguroservice: SeguroService, private router: Router) {
  }

  ngOnInit(): void {
  }

  data: any;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
  });

  addSeguro() {
    this.data = this.form.value;
    this.seguroservice.addSeguro(this.data).subscribe(() => {
      // redirect to home page
      this.router.navigate(['/seguros']);
    });
  }
}