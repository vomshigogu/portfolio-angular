import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { Home } from './components/home/home';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [Sidebar,Home,About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-app');
}
