import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookinglistComponent } from './bookinglist.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: BookinglistComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class BookingListRoutingModule { }