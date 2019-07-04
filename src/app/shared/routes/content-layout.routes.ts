import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    {
        path: 'content-layout',
        loadChildren: './pages/content-layout-page/content-pages.module#ContentPagesModule',
        canActivate: [AuthGuard]
      },
    {
      path: 'login',
      loadChildren: './pages/login/login-page.module#LoginPageModule',
    },
    {
      path: 'tracking', 
      loadChildren: './layouts/tracking/tracking.module#TrackingModule'
    }
];