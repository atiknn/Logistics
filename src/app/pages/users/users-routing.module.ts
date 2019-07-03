import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUsersComponent } from './add-users/add-users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        canActivate: [AuthGuard],children:[
            {
                path:'list-user',
                component: ListUsersComponent
            },
            {
                path: 'add-user',
                component: AddUsersComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class UsersRoutingModule { }