import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackingComponent } from './tracking.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path:'', component: TrackingComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class TrackingRoutingModule { }