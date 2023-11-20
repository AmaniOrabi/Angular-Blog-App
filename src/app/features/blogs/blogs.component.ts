import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { Blog } from '../../core/interfaces/blog.interface';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, BlogComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  blogsList: Blog[] = [
    { title: 'test1' },
    { title: 'test1' },
    { title: 'test1' },
    { title: 'test1' },
    { title: 'test1' },
    { title: 'test1' },
    { title: 'test1' },
    { title: 'test1' },
    { title: 'test1' },
    { title: 'test1' },
    { title: 'test1' },
    { title: 'test1' },
  ];
  constructor() {}
}
