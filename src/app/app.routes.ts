import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';
import { HeaderComponent } from './shared/components/header/header.component';

export const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent, 
    children: [
      {
        path: 'catalogos',
        component: CatalogosComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      }
    ]
  }
];
