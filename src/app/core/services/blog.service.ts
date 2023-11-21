import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environment';
import { ApiRoutes } from '../constants/api-routes';
import { createBlog } from '../interfaces/blog.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private _http: HttpClient) {}

  getBlogs() {
    const url = `${environment.apiDomain}${ApiRoutes.blogs}`;
    return this._http.get(url);
  }

  createBlog(payload: createBlog) {
    const url = `${environment.apiDomain}${ApiRoutes.blogs}`;
    return this._http.post(url, payload);
  }
}
