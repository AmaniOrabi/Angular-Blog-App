import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/shared/components/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, HttpClientModule],
})
export class AppComponent implements OnInit {
  title = 'neoblog-app';
  http = inject(HttpClient);
  ngOnInit(): void {}
}
