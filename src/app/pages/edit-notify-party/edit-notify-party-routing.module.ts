import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditNotifyPartyComponent } from './edit-notify-party.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: EditNotifyPartyComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class EditNotifyPartyRoutingModule { }