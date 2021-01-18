import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FbFormComponent } from './fb-form/fb-form.component';

const routes = [{ path: '', component: ClientComponent }]

@NgModule({
  declarations: [ClientComponent, FbFormComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule, ReactiveFormsModule
  ]
})
export class ClientModule { }
