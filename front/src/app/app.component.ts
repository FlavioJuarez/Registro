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
  estudiante;
  singupForm: FormGroup;
  loginForm: FormGroup;
  public errorMessage;
  statusLogin = false ;
  statusRegistro = false ;
  //const M;

  constructor(
  	private _builder: FormBuilder, 
  	private _httpClient: HttpClient
  ) { 
  	

  	this.loginForm = this._builder.group({
  		name: ['', Validators.required],
  		password: ['', Validators.required]
  	})
  }


  public sendGetRequest(){
  	this._httpClient.get<any>(this.REST_API_SERVER).subscribe(data => console.log(data),
  				error => this.errorMessage = error);
  }
  public login(values){
  	console.log(this.REST_API_SERVER+"/search?name="+values.name)
  	this._httpClient.get<any>(this.REST_API_SERVER+"/search?name="+values.name).subscribe(data =>
  		this.cambiarStatus(data,values.name,values.password),
  		error => this.errorMessage = error);
  	
  }

  public sendRequest(values){
  	this._httpClient.post<any>(this.REST_API_SERVER, values).subscribe(data =>
  		console.log('enviado'),
  		error => this.errorMessage = error);
  	
  }

  public cambiarStatus(data,name,password){
  	if(data[0].name == name && data[0].password == password ){
  		this.statusLogin = true ;
  		this.estudiante = data[0]; 
  		console.log(this.estudiante)
  	} else {
  		//M.toast({html: 'Usuario o contraseña incorrecta!'})
  	}
  	console.log(data[0].name + " " + name)
  }

  public cambiarStatusRegistro(registro){
  		this.statusRegistro = registro ;
  		this.statusLogin = true ;
  }

}
