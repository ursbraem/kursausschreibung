import Controller from '@ember/controller';
import settings from 'kursausschreibung/framework/settings';

export default Controller.extend({
  showBreadcrumbs: settings.showBreadcrumbs,
  badgeFreeSeatsEnabled: typeof settings.badgeFreeSeats === 'object' && settings.badgeFreeSeats.enabled === true
});
