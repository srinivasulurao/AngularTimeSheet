import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class LaravelService {

  private webservice="http://localhost:81/OracleTimeSheet/timesheet-webservice/";
  constructor(private http:HttpClient) { }


authenticateUser(email,password){
  return this.http.get(this.webservice+"login?user_email="+email+"&user_pwd="+password);
  

}


} //Class ends here.
