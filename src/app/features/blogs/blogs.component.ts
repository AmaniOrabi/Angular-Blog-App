import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { Blog } from '../../core/interfaces/blog.interface';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogService } from '../../core/services/blog.service';
import { AuthService } from '../../core/services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../../core/interceptors/auth.interceptor';
import { Router } from '@angular/router';
import { SnackbarService } from '../../core/services/snackbar.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    CommonModule,
    BlogComponent,
    MatIconModule,
    SharedModule,
    CreateBlogComponent,
    HttpClientModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit {
  private _dialog = inject(MatDialog);
  private _blogService = inject(BlogService);
  private _snackbarService = inject(SnackbarService);
  username: string = '';
  blogsList: Blog[] = [];
  private _router = inject(Router);
  private _authService = inject(AuthService);

  constructor() {
    this._authService.userName.subscribe((data) => {
      this.username = data;
    });
  }
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
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }

  openCreateBlogDialog(): void {
    const dialogRef = this._dialog.open(CreateBlogComponent, {});
    dialogRef.componentInstance.createCLicked.subscribe((response) => {
      this._blogService.createBlog(response).subscribe((response: any) => {
        this._snackbarService.successSnackbar('Blog created successfully!');
        dialogRef.close();
      });
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  getInitials(name: string): string {
    if (name) {
      const names = name.toUpperCase().split(' ');
      return names.map((n) => n[0]).join('');
    }
    return '';
  }
}
