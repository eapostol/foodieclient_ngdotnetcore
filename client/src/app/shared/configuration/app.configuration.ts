import { Injectable } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class Configuration {
  title = 'Foodie_Client';

  authConfig = {
    CLIENT_ID: 'AngularFoodClient',
    GRANT_TYPE: 'password',
    SCOPE: 'WebAPI'
  };

  // eja: https://www.npmjs.com/package/angular2-toaster
  // eja: based upon AngularJS Toaster, a method for non-blocking pop-ups
  toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-bottom-right'
  });
}
