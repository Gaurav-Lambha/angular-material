import { StateManagementService } from './services/state-management.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ ],
  imports: [
    FormsModule, ReactiveFormsModule
  ],
  exports: [  FormsModule, ReactiveFormsModule],
  providers: [StateManagementService]
})
export class SharedModule { }
