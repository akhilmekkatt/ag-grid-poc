import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';


const routes = [{ path: '', component: AdminComponent }]

@NgModule({
  declarations: [AdminComponent],
  imports: [

    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AdminModule { }
