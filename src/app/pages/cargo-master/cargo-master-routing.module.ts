import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargoMasterComponent } from './cargo-master.component';

const routes: Routes = [
    {
        path: '', component: CargoMasterComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class CargoMasterRoutingModule { }