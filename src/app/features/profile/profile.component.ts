import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../core/interfaces/blog.interface';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  blogsList: Blog[] = [];
  private _blogService = inject(BlogService);

  ngOnInit(): void {
    const token = localStorage.getItem('access-token');
    if (token) {
      this.getAllBlogs();
    }
  }

  getAllBlogs() {
    this._blogService.getBlogs().subscribe(
      (response: any) => {
        this.blogsList = response?.data?.blogs;
        console.log(response.data);
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
}
