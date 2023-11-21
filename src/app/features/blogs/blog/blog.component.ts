import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from '../../../core/services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, HttpClientModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  @Input() title: string = 'Blog title Blog title Blog title';
  @Input() description: string = 'Blog description';
  @Input() likedByNumber: number = 0;
  onBlogHover: boolean = false;
  isHovered: boolean = false;
}
