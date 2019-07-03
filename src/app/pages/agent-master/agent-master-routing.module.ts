import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentMasterComponent } from './agent-master.component';

const routes: Routes = [
    {
        path:'', component: AgentMasterComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AgentMasterRoutingModule { }