import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, 
    private loginService:LoginService) { }

  username: string | undefined;
  password: string | undefined;

  login() {
    // this.loginService.login(this.username, this.password).subscribe(response => {
    //   this.router.navigate(['/dashboard']);
    // }, error => {});
    this.router.navigate(['/dashboard']);
  }
}
