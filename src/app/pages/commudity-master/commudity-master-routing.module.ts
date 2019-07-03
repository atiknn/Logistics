import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommudityMasterComponent } from './commudity-master.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path:'', component: CommudityMasterComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class CommudityMasterRoutingModule { }