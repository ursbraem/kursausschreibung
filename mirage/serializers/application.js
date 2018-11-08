import { Serializer } from 'ember-cli-mirage';
import { capitalize } from '@ember/string';

export default Serializer.extend({
  embed: true,
  root: false,
  keyForAttribute(attr) {
    return capitalize(attr);
  }
});
