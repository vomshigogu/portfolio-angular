import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Sidebar,Home,About,Education,Skills,Projects,Contact,Footer,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-app');

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen);
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
}
