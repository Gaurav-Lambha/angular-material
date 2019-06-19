import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoreComponent } from './core.component';
import { FormControlsComponent } from './form-controls/form-controls.component';

const routes: Routes = [
    {
        path: '',
        component: CoreComponent,
        data: { title: 'Service Manager' },
        children: [
            {
                path: '',
                component: DashboardComponent,
                data: { title: 'dashboard' }
            },
            {
                path: 'form-control',
                component: FormControlsComponent,
                data: { title: 'dashboard' }
            },
            {
                path: 'user-profile',
                component: UserProfileComponent,
                data: { title: 'profile' }
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
