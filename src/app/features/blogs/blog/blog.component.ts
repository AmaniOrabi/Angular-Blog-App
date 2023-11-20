import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  @Input() title: string = 'Blog title';
  @Input() description: string = 'Blog description';
  @Input() likedByNumber: number = 0;
  onBlogHover: boolean = false;
}
