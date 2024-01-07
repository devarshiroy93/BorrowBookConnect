import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login', loadComponent: () => import('./pages/login-container/login-container.component').then(c => c.LoginContainerComponent)
    },
    {
        path: 'signup', loadComponent: () => import('./pages/signup-container/signup-container.component').then(c => c.SignupContainerComponent)
    },
    {
        path : '' , redirectTo : 'login' , pathMatch : 'full'
    }
    ];
