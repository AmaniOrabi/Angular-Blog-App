import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { Blog } from '../../core/interfaces/blog.interface';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogService } from '../../core/services/blog.service';
import { AuthService } from '../../core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

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
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit {
  private _dialog = inject(MatDialog);
  private _blogService = inject(BlogService);
  private _authService = inject(AuthService);

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
  constructor() {
    // this._authService.userToken$.subscribe((token) => {
    //   if (token) {
    this.getALlBlogs();
    //   }
    // });
  }

  ngOnInit(): void {}
  getALlBlogs() {
    this._blogService.getBlogs().subscribe((response) => {
      debugger;
    });
  }
  openCreateBlogDialog(): void {
    const dialogRef = this._dialog.open(CreateBlogComponent, {});
    dialogRef.componentInstance.createCLicked.subscribe((response) => {
      this._blogService.createBlog(response).subscribe((response) => {
        debugger;
      });
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
