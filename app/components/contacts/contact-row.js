import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',

	showConfirmation: false,

	actions: {
		delete() {
			var item = this.get('item');
			item.destroyRecord();
		}				
	}

});
