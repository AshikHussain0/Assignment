import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';




@NgModule({
  declarations: [
    DropdownComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [DropdownComponent, ButtonComponent]
})
export class SharedModule { }