import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login', loadComponent: () => import('./pages/login-container/login-container.component').then(c => c.LoginContainerComponent)
    },
    {
        path: 'signup', loadComponent: () => import('./pages/signup-container/signup-container.component').then(c => c.SignupContainerComponent)
    },
    {
        path: 'home', loadComponent: () => import('./pages/home-container/home-container.component').then(c => c.HomeContainerComponent)
    },
    {
        path : '' , redirectTo : 'login' , pathMatch : 'full'
    }
    ];
