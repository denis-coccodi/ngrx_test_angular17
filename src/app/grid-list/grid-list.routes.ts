import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GridListComponent } from './grid-list.component';
import { GridListEffects } from './state/grid-list.effects';
import { gridListFeature } from './state/grid-list.state';

export const routes: Routes = [
  {
    path: '',
    providers: [
      importProvidersFrom(
        StoreModule.forFeature(gridListFeature),
        EffectsModule.forFeature([GridListEffects])
      ),
    ],
    children: [
      {
        path: '',
        component: GridListComponent,
      },
    ],
  },
];
