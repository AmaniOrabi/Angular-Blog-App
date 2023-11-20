import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { Blog } from '../../core/interfaces/blog.interface';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { CreateBlogComponent } from './create-blog/create-blog.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    CommonModule,
    BlogComponent,
    MatIconModule,
    SharedModule,
    CreateBlogComponent,
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  private _dialog = inject(MatDialog);
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

  openCreateBlogDialog(): void {
    const dialogRef = this._dialog.open(CreateBlogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
