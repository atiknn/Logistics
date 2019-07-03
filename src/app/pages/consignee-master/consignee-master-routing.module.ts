import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsigneeMasterComponent } from './consignee-master.component';

const routes: Routes = [
    {
        path: '', component: ConsigneeMasterComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class ConsigneeMasterRoutingModule { }