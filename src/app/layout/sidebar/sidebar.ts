import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  imports: [NgIcon],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
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
