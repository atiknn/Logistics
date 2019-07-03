import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VesselMasterComponent } from './vessel-master.component';

const routes: Routes = [
    {
        path: '', component: VesselMasterComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class VesselMasterRoutingModule { }