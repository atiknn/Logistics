import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUsersComponent } from './edit-users.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: EditUsersComponent, canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class EditUserRoutingModule { }