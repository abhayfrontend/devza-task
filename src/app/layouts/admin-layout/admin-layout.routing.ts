import { Routes } from '@angular/router';


import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'create',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'edit',   component: UserProfileComponent },

];