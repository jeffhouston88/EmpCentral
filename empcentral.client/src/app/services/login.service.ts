import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://your-api-url/login';  // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.loginUrl, body);
  }
}