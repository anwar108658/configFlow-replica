import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMotionConfig } from '@scripttype/ng-motion';
import { routes } from './app.routes';
import { provideZard } from '@/shared/core/provider/providezard';
import { provideIcons } from '@ng-icons/core';
import * as allIcon from '@ng-icons/lucide';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideMotionConfig({ transition: { duration: 0.24, ease: 'easeOut' }, reducedMotion: 'user' }),
    provideZard(),
    provideIcons(allIcon),
  ]
};
