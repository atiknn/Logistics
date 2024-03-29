import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';
import { GenerateBlComponent } from './layouts/generate-bl/generate-bl.component';
import { GenerateInvoiceComponent } from './layouts/generate-invoice/generate-invoice.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
  { path: 'generatebl/:id', component: GenerateBlComponent, canActivate: [AuthGuard] },
  { path: 'generateIn/:id', component: GenerateInvoiceComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
