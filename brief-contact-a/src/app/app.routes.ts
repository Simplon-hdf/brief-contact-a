import { Routes } from '@angular/router';
import { Card } from './card/card';
import { AddForm } from './add-form/add-form';
import { ProfilePage } from './profile-page/profile-page';

export const routes: Routes = [
  { path: '', component: Card },
  { path: 'add', component: AddForm },
  { path: 'profile/:nom', component: ProfilePage },
  { path: '**', redirectTo: '' },
];
