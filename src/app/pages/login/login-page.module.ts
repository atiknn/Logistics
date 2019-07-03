import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        LoginPageRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [LoginPageComponent],
    providers: [],
})
export class LoginPageModule { }
