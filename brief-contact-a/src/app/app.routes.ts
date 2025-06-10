import { Routes } from '@angular/router';
import { Card } from './card/card';
import { AddForm } from './add-form/add-form';

export const routes: Routes = [
  { path: '', component: Card },
  { path: 'add', component: AddForm },
  { path: '**', redirectTo: '' },
];
