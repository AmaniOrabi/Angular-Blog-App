import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../core/interfaces/blog.interface';
import { BlogService } from '../../core/services/blog.service';
import { BlogComponent } from '../blogs/blog/blog.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../../core/interceptors/auth.interceptor';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, BlogComponent, HttpClientModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  blogsList: Blog[] = [];
  private _blogService = inject(BlogService);

  ngOnInit(): void {
    const token = sessionStorage.getItem('access-token');
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
