import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';

@Component({
  imports: [NgIcon, NgmMotionDirective],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  readonly navHover = { x: 2 };
  readonly navTap = { scale: 0.98 };
  readonly scrimClosed = { opacity: 0 };
  readonly scrimOpen = { opacity: 1 };

  @Input() activeSection = 'Dashboard';
  @Input() open = false;
  @Output() sectionChange = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  readonly navigation = [
    { label: 'Dashboard', icon: 'lucideLayoutDashboard' },
    { label: 'Configurations', icon: 'lucideLayers' },
    { label: 'Flows', icon: 'lucideWorkflow' },
    { label: 'Approvals', icon: 'lucideShieldCheck', count: '3' },
    { label: 'Environments', icon: 'lucideGlobe2' },
    { label: 'Activity', icon: 'lucideActivity' },
    { label: 'AI Assistant', icon: 'lucideBot' },
    { label: 'Settings', icon: 'lucideSettings' },
  ];
}
