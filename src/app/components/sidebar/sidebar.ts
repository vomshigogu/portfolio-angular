import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

activeLink = 'home';

setActive(link: string) {
  this.activeLink = link;
}

  @Input() isOpen = false;

  @Output() closeMenu = new EventEmitter<void>();

  closeSidebar() {
    this.closeMenu.emit();
  }


}
