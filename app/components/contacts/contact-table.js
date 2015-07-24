import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'table',
	classNames: ['table', 'table-bordered', 'table-hover'],


	actions: {
		toggleShowPhoneNumber: function() {
			this.toggleProperty('isShowingPhoneNumber');
		}				
	}
	
});
