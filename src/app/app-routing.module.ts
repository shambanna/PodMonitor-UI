import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// // import {TableSortingExample} from './datatable/datatable.component'
import {DashboardComponent} from './dashboard/dashboard.component';

// import { LoginComponent } from './login/login.component';
const routes: Routes = [
    {
        path: 'a',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    // { path: 'profile', loadChildren:'./profile/profile.module#ProfileModule'},
    { path: '', component: DashboardComponent},
    
    
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // { path: 'emailAuth/:email/:token', loadChildren: './email-auth/email-auth.module#EmailAuthModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
