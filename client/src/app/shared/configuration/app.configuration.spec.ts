import { Configuration } from './app.configuration';
import { ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { environment } from 'environments/environment';

describe('Configuration', () => {
  let service: Configuration;
  beforeEach(() => {
    service = new Configuration();
  });

  it('Returns the correct title', () => {
    expect(service.title).toBe('Foodie_Client');
  });

  it('BaseUrl should be in the cloud (AMZ or AZE) or localhost', () => {
    const possibleUrls = [
      // 'hosted cloud url for service endpoint. TODO: on amazon or azure' ,
      'http://localhost:51777/api/'
    ];

    console.log(environment);
    expect(
      possibleUrls.indexOf(environment.server + environment.apiUrl)
    ).toBeGreaterThanOrEqual(0);
  });

  it('BaseUrl ends with a slash', () => {
    const lastChar = environment.apiUrl.slice(-1);
    expect(lastChar).toBe('/');
  });

  it('ToasterConfig is of Type "Toasterconfig"', () => {
    expect(service.toasterConfig).toEqual(jasmine.any(ToasterConfig));
  });

  it('ToasterConfig places toasts on the bottom right corner', () => {
    expect(service.toasterConfig.positionClass).toEqual('toast-bottom-right');
  });
});
