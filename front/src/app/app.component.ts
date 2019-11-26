import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaSalle';

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
  	this.httpClient.get<any>(this.REST_API_SERVER).subscribe(data => this.estudiantes = data,
  				error => this.errorMessage = error);
  }

  public imprimir(){
  	console.log(this.estudiantes);
  }

  jquery_code(){
  	$(document).ready(function(){
    	$('.modal').modal();
  	});
  }

}
