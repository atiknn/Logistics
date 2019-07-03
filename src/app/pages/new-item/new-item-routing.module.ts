import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewItemComponent } from './new-item.component';
import { AuthGuard } from 'app/shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: NewItemComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class NewIntemRoutingModule { }