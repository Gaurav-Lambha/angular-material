
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../auth-pages/auth.component';
import { LoginComponent } from './../auth-pages/login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        data: { title: 'Service Manager' },
        children: [
            {
                path: '', redirectTo: 'login'
            },
            {
                path: 'login',
                component: LoginComponent,
                data: { title: 'login' }
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
                data: { title: 'Forgot-password' }
            },
            {
                path: 'singup',
                component: SingupComponent,
                data: { title: 'Singup' }
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
export class AuthRoutingModule { }
