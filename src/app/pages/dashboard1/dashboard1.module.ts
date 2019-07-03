import { NgModule } from '@angular/core';
import { Dashboard1Component } from './dashboard1.component';
import { Dashboard1RoutingModule } from './dashboard-routing.module';


@NgModule({
    imports: [Dashboard1RoutingModule],
    exports: [],
    declarations: [Dashboard1Component],
    providers: [],
})
export class DashboardModule { }
