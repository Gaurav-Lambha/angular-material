import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core.routing';
import { CoreComponent } from './core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AngularMaterialModule } from './../shared/modules/material/material.module';
import { HeaderComponent } from './header/header.component';
import { FormControlsComponent } from './form-controls/form-controls.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    AngularMaterialModule
  ],
  declarations: [CoreComponent,
    HeaderComponent,
    DashboardComponent,
    UserProfileComponent,
    FormControlsComponent]
})
export class CoreModule { }
