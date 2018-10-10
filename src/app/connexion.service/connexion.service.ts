import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../user/user";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  server_url = 'https://reqres.in/api/users';
  constructor(
    private http: HttpClient
  ) { }
  createConnexion(user: User) {
    const params = JSON.stringify({
      'name': user.email,
      'job': user.password
    });
    const httpHeadres = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Cache-Control' : 'no-cache'
      }
    );
    const options = {
      headers: httpHeadres
    };
    return this.http.post(this.server_url, params.toString() , options);
  }
}
