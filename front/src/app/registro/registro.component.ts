import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var $:any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  private REST_API_SERVER = "http://localhost:8080/estudiantes";
  singupForm: FormGroup;
  public errorMessage;

  constructor(
  	private _builder: FormBuilder, 
  	private _httpClient: HttpClient
  ) {
  	this.singupForm = this._builder.group({
  		nombre: ['', Validators.required],
  		email: ['', Validators.compose([Validators.email, Validators.required])],
  		nivel: ['', Validators.required],
  		matricula: ['', Validators.required],
  		semestre: ['', Validators.required]
  	})
  }

  ngOnInit() {
  }

}
