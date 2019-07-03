import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCommudityComponent } from './edit-commudity.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: EditCommudityComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class EditCommudityRoutingModule { }