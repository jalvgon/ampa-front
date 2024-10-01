import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DiscountsComponent, NewsComponent, EventsComponent } from '@ampa-front/features';
//import { AuthService, userRolesGuard } from '@easy-advisor/shared/core';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    //canMatch: [() => inject(AuthService).isLoggedIn()],

    children: [
      {
        path: 'news',
        component: NewsComponent,
        //canMatch: [() => inject(AuthService).isLoggedIn()],
      },
      {
        path: 'discounts',
        component: DiscountsComponent,
        //canMatch: [() => inject(AuthService).isLoggedIn()],
      },{
        path: 'events',
        component: EventsComponent,
        //canMatch: [() => inject(AuthService).isLoggedIn()],
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'error/404',
  },
];
