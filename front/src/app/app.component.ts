import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.inicio.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  singupForm: FormGroup
  httpClient: HttpClient

  constructor(
  	private _builder: FormBuilder, 
  	private http: HttpClient
  ) { 
  	this.singupForm = this._builder.group({
  		nombre: ['', Validators.required],
  		email: ['', Validators.compose([Validators.email, Validators.required])],
  		nivel: ['', Validators.required],
  		matricula: ['', Validators.required],
  		semestre: ['', Validators.required]
  	})
  }

  enviar (values) {
  	const url = 'http://localhost:8080/estudiantes';
  	this.http.post<any>(url, values).subscribe();
  }

}
