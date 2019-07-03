import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { Client } from 'app/shared/model/client';
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

     // @ViewChild('f') loginForm: NgForm;
     models = new Client();
     token;
 
     constructor(private router: Router, private _serviceLogin: AuthService ,private route: ActivatedRoute) { }
 
     ngOnInit(): void {
         localStorage.removeItem('currentUser');
         localStorage.clear();
     }
 
     // On submit button click
     onSubmit(f: Client) {
         this._serviceLogin.getData(f).subscribe((s) => {
             this.router.navigateByUrl('full-layout');
         })
     }
 
 
     // On Forgot password link click
     onForgotPassword() {
         this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
     }
 
     // On registration link click
     onRegister() {
         this.router.navigate(['register'], { relativeTo: this.route.parent });
     }
}