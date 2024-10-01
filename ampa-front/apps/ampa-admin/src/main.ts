import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ContainerComponent } from './app/container.component';

bootstrapApplication(ContainerComponent, appConfig).catch((err) =>
  console.error(err)
);
