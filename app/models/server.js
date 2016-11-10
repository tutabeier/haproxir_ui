import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  host: attr('string'),
  weight: attr('number'),
  port: attr('number')
});
