import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  getBlogById(blogId: string) {
    debugger
    const headers = new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YTQzNGU5NC0wZTU5LTQ4NTgtYWVmNS01Y2JhY2Q4MjkyNTgiLCJpZCI6IjZhNDM0ZTk0LTBlNTktNDg1OC1hZWY1LTVjYmFjZDgyOTI1OCIsInVzZXJuYW1lIjoiYW1hbmkiLCJpYXQiOjE3MDA2NjU5NjEsImV4cCI6MTcwMDc1MjM2MX0.FVME_0w2ajEcB_qjDPRiS80iO4KiOu6CNIYQL8_hA-E', // Include authorization header if needed
    });
    let url = `${environment.apiDomain}${ApiRoutes.getbBlogById}`;
    url = url.replace(':id', blogId);
    return this._http.get(url, {
      headers: headers});
  }
}
