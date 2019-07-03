
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const storeUser = this._authService.getTokens();
    const storeUser = JSON.parse(localStorage.getItem("currentUser"));
    const token = storeUser;
     //alert(JSON.stringify(token));
    if (!token) {
      return next.handle(req);
    }

    if (token) {
     //alert(token);
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
      // console.log('before');
      // console.log(cloned);
      // console.log('after');
      return next.handle(cloned);
    }
  }
}
