import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BlogService } from '../../../core/services/blog.service';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],

  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss',
})
export class CreateBlogComponent {
  @Output() createCLicked = new EventEmitter()
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required, Validators.email],
      cover: ['', Validators.required],
    });
    debugger
  }
  createBlogCLicked() {
        const payload = {
          title: this.form.controls['title'].value,
          content: this.form.controls['content'].value,
          cover: this.form.controls['cover'].value,
        };
    this.createCLicked.emit(payload)
  }
}
