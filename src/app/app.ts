import { Component } from '@angular/core';
import { MainLayout } from './layout/main-layout/main-layout';

@Component({
  imports: [MainLayout],
  selector: 'app-root',
  styleUrl: './app.css',
  template: '<app-main-layout />',
})
export class App {
}
