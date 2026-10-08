import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideZard } from '@/shared/core/provider/providezard';
import { provideIcons } from '@ng-icons/core';
import {
  lucideActivity,
  lucideArrowUpRight,
  lucideBell,
  lucideBot,
  lucideChevronRight,
  lucideCircleHelp,
  lucideEllipsis,
  lucideGlobe2,
  lucideLayers,
  lucideLayoutDashboard,
  lucideMenu,
  lucideMoon,
  lucidePlus,
  lucideSearch,
  lucideSettings,
  lucideShieldCheck,
  lucideSun,
  lucideWorkflow,
} from '@ng-icons/lucide';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideZard(),
    provideIcons({
      lucideActivity,
      lucideArrowUpRight,
      lucideBell,
      lucideBot,
      lucideChevronRight,
      lucideCircleHelp,
      lucideEllipsis,
      lucideGlobe2,
      lucideLayers,
      lucideLayoutDashboard,
      lucideMenu,
      lucideMoon,
      lucidePlus,
      lucideSearch,
      lucideSettings,
      lucideShieldCheck,
      lucideSun,
      lucideWorkflow,
    }),
  ]
};
