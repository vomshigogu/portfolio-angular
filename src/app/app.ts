import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Sidebar,Home,About,Education,Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-app');
}
