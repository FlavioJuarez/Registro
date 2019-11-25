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

  private REST_API_SERVER = "http://localhost:8080/estudiantes";
  public estudiantes = [];
  singupForm: FormGroup
  public errorMessage;

  constructor(
  	private _builder: FormBuilder, 
  	private httpClient: HttpClient
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

  }

  public sendGetRequest(){
  	this.httpClient.get<any>(this.REST_API_SERVER).subscribe(data => console.log(res),
  				error => this.errorMessage = error);
  }

}
