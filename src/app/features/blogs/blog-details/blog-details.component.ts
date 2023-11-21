import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../../core/services/blog.service';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss',
})
export class BlogDetailsComponent {}
