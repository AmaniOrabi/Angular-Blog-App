import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { BlogService } from '../../core/services/blog.service';

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

  onSignUpCLick(event: Event) {
    this.isSignUpmoveLeftEnabled = true;
    this.isSignInmoveLeftEnabled = false;
    event.stopPropagation();
  }

  onSignInCLick() {
    this.isSignInmoveLeftEnabled = true;
  }
  onReturnCLick() {
    this.isSignUpmoveLeftEnabled = false;
    this.isSignInmoveLeftEnabled = false;
  }
}
