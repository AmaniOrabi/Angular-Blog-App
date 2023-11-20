import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatIconModule,
    AuthModule,
    SharedModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isSignInmoveLeftEnabled: boolean = false;
  isSignUpmoveLeftEnabled: boolean = false;

  onSignUpCLick() {
    this.isSignUpmoveLeftEnabled = true;
    this.isSignInmoveLeftEnabled = false;
  }

  onSignInCLick() {
    this.isSignInmoveLeftEnabled = true;
  }
  onReturnCLick() {
    this.isSignUpmoveLeftEnabled = false;
    this.isSignInmoveLeftEnabled = false;
    
  }
}
