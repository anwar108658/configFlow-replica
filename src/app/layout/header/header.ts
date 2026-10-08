import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ZardButton } from '../../shared/components/button/button';

@Component({
  imports: [NgIcon, ZardButton],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  @Input() pageTitle = 'Dashboard';
  @Input() darkMode = false;
  @Output() menuClick = new EventEmitter<void>();
  @Output() themeToggle = new EventEmitter<void>();
  @Output() queryChange = new EventEmitter<string>();
}
