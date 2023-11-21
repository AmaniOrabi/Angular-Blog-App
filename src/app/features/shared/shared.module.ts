import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from '../../core/services/blog.service';
import { AuthService } from '../../core/services/auth.service';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, HttpClientModule],
  providers: [BlogService, AuthService],
  exports: [ButtonComponent],
})
export class SharedModule {}
