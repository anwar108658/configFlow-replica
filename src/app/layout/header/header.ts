import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';
import { ZardButton } from '../../shared/components/button/button';

@Component({
  imports: [NgIcon, NgmMotionDirective, ZardButton],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  readonly enterFrom = { opacity: 0, y: -8 };
  readonly enterTo = { opacity: 1, y: 0 };
  readonly buttonHover = { scale: 1.06 };
  readonly buttonTap = { scale: 0.94 };
  @Input() pageTitle = 'Dashboard';
  @Input() darkMode = false;
  @Output() menuClick = new EventEmitter<void>();
  @Output() themeToggle = new EventEmitter<void>();
  @Output() queryChange = new EventEmitter<string>();
}
