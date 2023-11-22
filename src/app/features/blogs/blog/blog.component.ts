import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, HttpClientModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  @Input() title: string = '';
  @Input() likedByNumber: number = 10;
  @Input() cover: string = '';

  private _authService = inject(AuthService);
  onBlogHover: boolean = false;
  isHovered: boolean = false;
  username: string = '';

  ngOnInit(): void {
    this._authService.userName$.subscribe((username) => {
      this.username = this.getInitials(username);
    });
  }

  private getInitials(name: string): string {
    const names = name.split(' ');
    return names.map((n) => n[0]).join('');
  }
}
