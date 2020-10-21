import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import {cData} from "./cData";
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private registerUrl = "https://ionic-server-app.herokuapp.com/trainee/register";
  private loginUrl = "https://ionic-server-app.herokuapp.com/trainee/login";
  private covidUrl = "https://coronavirus-19-api.herokuapp.com/countries";


  constructor(private http:HttpClient,private _router:Router) { }

  public register(formData): Observable<any> {
    return this.http
      .post(this.registerUrl, formData, { observe: "response" })
      .pipe(catchError(this.handleError));
  }

  public login(formData):Observable<any>{
    return this.http
    .post(this.loginUrl, formData, { observe: "response" })
    .pipe(catchError(this.handleError));
  }

  public getData():Observable<cData[]>
  {
    return this.http.get<cData[]>(this.covidUrl);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  loggedOut(){
  localStorage.removeItem('token')
  this._router.navigate(['/login'])
  }

  public handleError(error: HttpErrorResponse) {
    return error.status.toString();
  }
}
