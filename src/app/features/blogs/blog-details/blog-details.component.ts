import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/interfaces/blog.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss',
})
export class BlogDetailsComponent {
  blogId: string = '';
  blog?: Blog;
  private _blogService = inject(BlogService);
  private _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.blogId = this._activatedRoute.snapshot.params['blogId'];

    this._blogService.getBlogById(this.blogId).subscribe(
      (response: any) => {
        this.blog = response?.data;
      },
      (error) => {
        console.error('Error fetching blog details:', error);
      }
    );
  }
}
