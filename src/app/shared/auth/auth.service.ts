import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';
import { map } from 'rxjs/operators';
import { urlRegistry } from '../services/urls';

@Injectable()
export class AuthService {
  static token: string;
  //sk: RouteInfos[];
  lk;
  constructor(private _httpClient: HttpClient, private _router: Router) {}
  httpOptions = { headers: new HttpHeaders({'Content-Type':  'application/json'}) };


  getData(c:Client) {
    console.log(c);
     return this._httpClient.post<any>(urlRegistry.login, c, this.httpOptions ).pipe(
        map(user => {
          // login bem-sucedido se houver um token jwt na resposta
          if (user && user.s.body.token) {
            // armazenar detalhes do usuário e token jwt no localStorage para manter o usuário logado entre as atualizações da página
            // this.lk = user.tokens.body.token;
            localStorage.setItem('currentUser', JSON.stringify(user.s.body.token));
            //localStorage.setItem('nav', JSON.stringify(user.ua));
            // AuthService.token = 'Bearer ' + user.tokens.body.token;
            //navdata.ROUTES = user.ua;
          }
          return user;
        })
      );
}

  getTokens(){
    this.lk = JSON.parse(localStorage.getItem('currentUser'));
    return this.lk;
  }

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
  }

  logout() {
    AuthService.token = null;
    this._router.navigateByUrl('login');
  }


  isAuthenticated() {
    // here you can check if user is authenticated or not through his token
    if (localStorage.getItem("currentUser")){
      return true;
    } else {
      this._router.navigateByUrl('login');
      return false;
    }
  }
}
