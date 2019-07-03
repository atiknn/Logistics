import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBookingComponent } from './new-booking.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: NewBookingComponent, canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class NewBookingRoutingModule { }