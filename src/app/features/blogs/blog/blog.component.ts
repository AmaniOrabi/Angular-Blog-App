import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';
import { AuthInterceptor } from '../../../core/interceptors/auth.interceptor';
import { Router } from '@angular/router';
import { BlogService } from '../../../core/services/blog.service';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  @Input() title: string = '';
  @Input() authorId: string = '';
  @Input() id: string = '';
  @Input() likeCount: number = 0;
  @Input() cover: string = '';
  @Input() myBlogs: boolean = false;
  @Input() likedByUser: boolean = false;

  private _authService = inject(AuthService);
  private _blogService = inject(BlogService);
  private _snackBarService = inject(SnackbarService);

  private _router = inject(Router);
  onBlogHover: boolean = false;
  isHovered: boolean = false;
  userData: any;
  constructor() {}
  ngOnInit(): void {
    this.getAuthorInfo();
  }

  getInitials(name: string): string {
    if (name) {
      const names = name.toUpperCase().split(' ');
      return names.map((n) => n[0]).join('');
    }
    return '';
  }

  getAuthorInfo() {
    this._authService.getUserById(this.authorId).subscribe((response: any) => {
      this.userData = response?.data;
    });
  }

  editBlog(): void {}

  deleteBlog(): void {}

  redirectToBlogDetails() {
    this._router.navigate(['/blog-details', this.id]);
  }
  toggleLike() {
    this._blogService.likeBlog(this.id).subscribe(() => {
      if (this.likedByUser) {
        this.likeCount--;
        this._snackBarService.successSnackbar('Blog unliked !');
      } else {
        this.likeCount++;
        this._snackBarService.successSnackbar('Blog liked !');
      }
      this.likedByUser = !this.likedByUser;
    });
  }
}
