import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isSignInmoveLeftEnabled: boolean = false;
  isSignUpmoveLeftEnabled: boolean = false;

  onSignUpCLick() {
    this.isSignUpmoveLeftEnabled = true;
  }

  onSignInCLick() {
    this.isSignInmoveLeftEnabled = true;
  }
}
