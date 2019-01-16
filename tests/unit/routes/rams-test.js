import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | rams', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:rams');
    assert.ok(route);
  });
});
