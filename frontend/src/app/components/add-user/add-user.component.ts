import { Component, OnInit } from '@angular/core';
import { UserService, SeguroService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent implements OnInit {


  seguros: any[] = [];

  constructor(private service: UserService , private seguroservice: SeguroService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadSeguros();
  }

  data: any;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    lastname: new FormControl('', Validators.required),
    seguro: new FormControl('', Validators.required)
  });

  loadSeguros() {
    this.seguroservice.getSeguros().subscribe(seguros => {
      this.seguros = seguros;
    });
  }

  addUser() {
    this.data = this.form.value;
    this.service.addUser(this.data).subscribe(() => {
      // redirect to home page
      this.router.navigate(['/']);
    });
  }
}
