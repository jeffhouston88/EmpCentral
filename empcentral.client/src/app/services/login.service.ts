import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://your-api-url/login';  // Replace with your API endpoint

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.loginUrl, body).pipe(map((response: any) => {
      localStorage.setItem('jwtToken', response.token);
      localStorage.setItem('userRoles', response.userRoles);
    }));
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('jwtToken');

    if (token ) {
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/login']);
  }

  hasRole(requiredRole: string[]): boolean {
    const token = localStorage.getItem('userRoles');

    if (token) {
      // Decode the token to get the user details
      // Check if the user has the required role
      // const decodedToken = jwt_decode(token);

      const userRoles: string[] = token.split(',');
      return requiredRole.some(role => userRoles.includes(role));
    }

    return false;
  }
}

