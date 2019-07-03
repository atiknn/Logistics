import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditShipperComponent } from './edit-shipper.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: EditShipperComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class EditShipperRoutingModule { }

