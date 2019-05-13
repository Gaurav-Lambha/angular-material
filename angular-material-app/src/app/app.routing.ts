import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuardService } from '@app/core/auth/auth-guard.service';


const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        data: { title: 'Angular Material' },
        children: [
            {
                path: '',
                loadChildren: './auth-pages/auth.module#AuthModule',
            },
            {
                path: 'app',
                loadChildren: './core-pages/core.module#CoreModule',
                //  canActivate: [AuthGuardService],
                data: { title: 'Dashboard' }
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
