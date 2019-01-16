import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('images');
  this.route('fox-facts');
  this.route('videos');
  this.route('music');
  this.route('bears');
  this.route('sealions');
  this.route('lemmings');
  this.route('rams');
});

export default Router;
