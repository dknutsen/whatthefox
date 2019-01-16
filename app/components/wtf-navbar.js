import Component from '@ember/component';

export default Component.extend({
  toggleNav: false,

  actions: {
    toggleNav() {
      this.toggleProperty('toggleNav');
    }
  }
});
