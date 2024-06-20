import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TableEffects } from './state/table.effects';
import { tableFeature } from './state/table.state';
import { TableComponent } from './table.component';

export const routes: Routes = [
  {
    path: '',
    // registering providers for the route and all its children
    providers: [
      importProvidersFrom(
        StoreModule.forFeature(tableFeature),
        EffectsModule.forFeature([TableEffects])
      ),
    ],
    children: [
      {
        path: '',
        component: TableComponent,
      },
    ],
  },
];
