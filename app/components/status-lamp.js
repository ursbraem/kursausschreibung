import Component from '@ember/component';
import { observer } from '@ember/object';
import { getString } from '../framework/translate';

const statuses = {
  green: { tooltip: getString('greenLamp'), className: 'lamp-green' },
  yellow: { tooltip: getString('yellowLamp'), className: 'lamp-yellow' },
  red: { tooltip: getString('redLamp'), className: 'lamp-red' },
  orange: { tooltip: getString('orangeLamp'), className: 'lamp-orange' }
};

export default Component.extend({
  init() {
    this._super();
    // trigger observer
    this.statusChanged();
  },

  statusChanged: observer('status', function () {
    let status = statuses[this.get('status')];

    if (status !== undefined) {
      this.set('tooltip', status.tooltip);
      this.set('classNames', [status.className]);
    }
  }),

  tagName: 'span',
  attributeBindings: ['tooltip:uk-tooltip']
});
