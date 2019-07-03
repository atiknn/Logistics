import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillofLeadingComponent } from './billof-leading.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: BillofLeadingComponent, canActivate:[AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class BillofLeadingRoutingModule { }