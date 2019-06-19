import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuardService } from '@app/core/auth/auth-guard.service';


const routes: Routes = [
    {
        path: 'auth',
        loadChildren: './auth-pages/auth.module#AuthModule',
    },
    {
        path: 'app',
        loadChildren: './core-pages/core.module#CoreModule',
    },
    {
        path: '**',
        redirectTo: 'app'
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
