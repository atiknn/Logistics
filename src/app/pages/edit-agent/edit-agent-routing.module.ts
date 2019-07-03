import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAgentComponent } from './edit-agent.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path:'', component: EditAgentComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class EditAgentRoutingModule { }