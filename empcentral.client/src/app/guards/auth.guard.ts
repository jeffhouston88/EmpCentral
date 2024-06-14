import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: LoginService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // Check if the user is authenticated
        if (this.authService.isAuthenticated()) {
            // Check if the user has the required role
            if (this.authService.hasRole(next.data['requiredRole'])) {
                return true;
            } else {
                // Redirect to unauthorized page or show an error message
                //this.router.navigate(['/unauthorized']);
                return true;
            }
        } else {
            // Redirect to login page
           // this.router.navigate(['/login']);
            return true;
        }
    }
}