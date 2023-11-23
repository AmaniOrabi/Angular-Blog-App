import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/interfaces/blog.interface';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../core/interceptors/auth.interceptor';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    BlogService,
    AuthService,
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss',
})
export class BlogDetailsComponent implements OnInit {
  blogId: string = '';
  blog!: Blog;
  authorName: string = '';
  private _blogService = inject(BlogService);
  private _activatedRoute = inject(ActivatedRoute);
  private _authService = inject(AuthService);

  ngOnInit(): void {
    this.blogId = this._activatedRoute.snapshot.params['blogId'];
    this._blogService.getBlogById(this.blogId).subscribe(
      (response: any) => {
        this.blog = response?.data;
        this.getAuthorInfo();
      },
      (error) => {
        console.error('Error fetching blog details:', error);
      }
    );
  }

  getAuthorInfo() {
    this._authService
      .getUserById(this.blog.authorId)
      .subscribe((response: any) => {
        this.authorName = response?.data.username;
      });
  }
}
