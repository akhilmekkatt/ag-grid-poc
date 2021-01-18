import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
  { path: 'admin/:id', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
  { path: 'client', loadChildren: () => import('../app/client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  { path: 'grid', component: DataTableComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
