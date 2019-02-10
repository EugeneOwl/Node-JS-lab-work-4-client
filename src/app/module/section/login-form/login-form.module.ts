import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,

    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatBadgeModule,
    MatSliderModule
  ],
  exports: [ LoginFormComponent ],
})
export class LoginFormModule {
}
