import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fox-facts', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fox-facts');
    assert.ok(route);
  });
});
