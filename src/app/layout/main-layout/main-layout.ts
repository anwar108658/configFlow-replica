import { Component, computed, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { ZardButton } from '../../shared/components/button/button';

@Component({
  imports: [Header, Sidebar, NgIcon, NgmMotionDirective, ZardButton],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {
  readonly enterFrom = { opacity: 0, y: 10 };
  readonly enterTo = { opacity: 1, y: 0 };
  readonly sectionTransition = { duration: 0.28, ease: 'easeOut' } as const;
  readonly cardHover = { y: -2 };
  readonly buttonHover = { scale: 1.03 };
  readonly buttonTap = { scale: 0.97 };
  readonly metricContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.045, delayChildren: 0.04 } },
  } as const;
  readonly metricItemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  } as const;

  readonly activeSection = signal('Dashboard');
  readonly sidebarOpen = signal(false);
  readonly darkMode = signal(false);
  readonly query = signal('');

  readonly configurations = [
    { name: 'Production API', description: 'Core gateway and routing rules', environment: 'Production', owner: 'Engineering', initials: 'EN', tone: 'violet', status: 'Active', updated: '2 minutes ago', version: 'v2.4.1' },
    { name: 'Payment Service', description: 'Payment provider and retry policy', environment: 'Staging', owner: 'Platform Team', initials: 'PT', tone: 'blue', status: 'Pending', updated: '18 minutes ago', version: 'v1.8.3' },
    { name: 'Notification Service', description: 'Email and webhook preferences', environment: 'Development', owner: 'Backend Team', initials: 'BT', tone: 'teal', status: 'Draft', updated: '1 hour ago', version: 'v0.9.2' },
    { name: 'Authentication', description: 'Identity provider and session policy', environment: 'Production', owner: 'Security', initials: 'SE', tone: 'rose', status: 'Active', updated: 'Yesterday', version: 'v3.1.0' },
    { name: 'Analytics Pipeline', description: 'Event ingestion and retention', environment: 'Staging', owner: 'Data Team', initials: 'DT', tone: 'amber', status: 'Failed', updated: '2 days ago', version: 'v1.2.6' },
  ];

  readonly filteredConfigurations = computed(() => {
    const query = this.query().trim().toLowerCase();
    return this.configurations.filter((configuration) =>
      `${configuration.name} ${configuration.description} ${configuration.environment} ${configuration.owner}`.toLowerCase().includes(query),
    );
  });

  readonly metrics = [
    { value: '24', label: 'Active configurations', note: '12% from last month', meta: 'of 28 total', icon: 'lucideLayers', trend: 'positive' },
    { value: '3', label: 'Pending approvals', note: 'Needs your review', meta: '2 high priority', icon: 'lucideShieldCheck', trend: 'warning' },
    { value: '98.7%', label: 'Successful deployments', note: '1.4% this month', meta: 'Last 30 days', icon: 'lucideArrowUpRight', trend: 'positive' },
    { value: '17', label: 'Recent changes', note: 'Across 6 services', meta: 'Last 7 days', icon: 'lucideActivity', trend: 'neutral' },
  ];

  readonly activities = [
    { initials: 'AJ', tone: 'owner', title: 'Alex updated Production API', detail: 'Changed MAX_RETRIES from 3 to 5', time: '2 minutes ago' },
    { initials: 'SC', tone: 'blue', title: 'Sarah approved Payment Service', detail: 'Approved version v1.8.3 for staging', time: '18 minutes ago' },
    { initials: 'CF', tone: 'green', title: 'Configuration v2.4.1 deployed', detail: 'Production API deployed successfully', time: '1 hour ago' },
  ];

  readonly environments = [
    { name: 'Production', configs: '12 configs', uptime: '99.99%' },
    { name: 'Staging', configs: '9 configs', uptime: '99.84%' },
    { name: 'Development', configs: '7 configs', uptime: '98.92%' },
  ];

  readonly pageTitle = computed(() => this.activeSection());

  setSection(section: string): void {
    this.activeSection.set(section);
  }

  setQuery(query: string): void {
    this.query.set(query);
  }

}
