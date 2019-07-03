import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: './changelog/changelog.module#ChangeLogModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'full-layout',
    //loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule',
    loadChildren: './pages/dashboard1/dashboard1.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: './pages/users/users.module#UsersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'booking',
    loadChildren: './pages/new-booking/new-booking.module#NewBookingModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'new-item',
    loadChildren: './pages/new-item/new-item.module#NewItemModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'edituser/:id',
    loadChildren: './pages/edit-users/edit-users.module#EditUsersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'shipper-master',
    loadChildren: './pages/shipper-master/shipper-master.module#ShipperMasterModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-shipper-master/:id',
    loadChildren: './pages/edit-shipper/edit-shipper.module#EditShipperModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'consignee-master',
    loadChildren: './pages/consignee-master/consignee-master.module#ConsigneeMasterModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-consignee-master/:id',
    loadChildren: './pages/edit-consignee/edit-consignee.module#EditConsigneeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'agent',
    loadChildren: './pages/agent-master/agent-master.module#AgentMasterModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-agent-master/:id',
    loadChildren: './pages/edit-agent/edit-agent.module#EditAgentModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'vessel-master',
    loadChildren: './pages/vessel-master/vessel-master.module#VesselMasterModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'cargo-master',
    loadChildren: './pages/cargo-master/cargo-master.module#CargoMasterModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'port-master',
    loadChildren: './pages/port-master/port-master.module#PortMasterModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'notify-party',
    loadChildren: './pages/notify-party/notify-party.module#NotifyPartyModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-notify-party/:id',
    loadChildren: './pages/edit-notify-party/edit-notify-party.module#EditNotifyPartyModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'commudity-master',
    loadChildren: './pages/commudity-master/commudity-master.module#CommudityMasterModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-commudity-master/:id',
    loadChildren: './pages/edit-commudity/edit-commudity.module#EditCommudityModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'bookinglist',
    loadChildren: './pages/bookinglist/bookinglist.module#BookinglistModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'billofLeading/:id',
    loadChildren: './pages/billof-leading/billof-leading.module#BillofLeadingModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'editInvoice/:id',
    loadChildren: './pages/edit-invoice/edit-invoice.module#EditInvoiceModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-vessel-master/:id',
    loadChildren: './pages/edit-vessels/edit-vessels.module#EditVesselsModule',
    canActivate: [AuthGuard]
  }
];