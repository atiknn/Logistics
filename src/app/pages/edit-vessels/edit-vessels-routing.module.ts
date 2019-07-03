import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditVesselsComponent } from './edit-vessels.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: EditVesselsComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class EditVesselsRoutingModule { }