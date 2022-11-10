import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './Services/token.service';
@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {
    constructor(
        private router: Router,
        private token: TokenService

    ) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this.token.GetToken()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }

    }
}