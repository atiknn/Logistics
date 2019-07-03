import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortMasterComponent } from './port-master.component';

const routes: Routes = [
    {
        path: '', component: PortMasterComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class PortMasterRoutingModule { }