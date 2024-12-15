import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {Amplify} from 'aws-amplify';
import {ResourcesConfig} from '@aws-amplify/core';

const resource: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolClientId: '73i3aocq1mk6qf5v36tr3p8pft',
      userPoolId: 'eu-west-1_vgmV0a7KM',
    }
  }
}
Amplify.configure(resource);

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
}).catch(err => console.error(err));
