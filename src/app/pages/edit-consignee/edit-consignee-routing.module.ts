import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditConsigneeComponent } from './edit-consignee.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path:'', component: EditConsigneeComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class EditConsigneeRoutingModule { }