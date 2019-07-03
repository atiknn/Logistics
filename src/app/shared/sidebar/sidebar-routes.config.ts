import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/full-layout', title: 'Dashboard', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/users', title: 'Users', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/booking', title: 'New Booking', icon: 'ft-plus-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/bookinglist', title: 'Booking List', icon: 'ft-plus-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Masters', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/shipper-master', title: 'Add Shipper', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/consignee-master', title: 'Add Consignee', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/agent', title: 'Add Forwording Agent', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/vessel-master', title: 'Add Vessel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/notify-party', title: 'Add Notify Party', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {path: '/commudity-master', title: 'Add Commudity', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
            // { path: '/cargo-master', title: 'Add Cargo Type', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // { path: '/port-master', title: 'Add Port', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            // {
            //     path: '', title: 'Second Level Child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
            //     submenu: [
            //         { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            //         { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            //     ]
            // },
        ]
    },
    // {
    //     path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    {
        path: '/new-item', title: 'New Item', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Logout', icon: 'ft-power mr-2', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }

];
