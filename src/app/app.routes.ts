import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'standings',
    loadComponent: () => import('./standings/standings.page').then( m => m.StandingsPage)
  },
  {
    path: 'track-info',
    loadComponent: () => import('./track-info/track-info.page').then( m => m.TrackInfoPage)
  },
  {
    path: 'current-info',
    loadComponent: () => import('./current-info/current-info.page').then( m => m.CurrentInfoPage)
  },
];
