import Ember from 'ember';

export default Ember.Controller.extend({
	
	queryParams: ['isShowingPhoneNumber'],
	
	nameFromInput: '',
	phoneFromInput: '',
	emailFromInput: '',
	
	isShowingPhoneNumber: false,

	contactsWithEmail: function() {
		var model = this.get('model');
		var filteredModel = model.filterBy('email');
		return filteredModel.get('length');
	}.property('model.@each'),


	actions: {
		toggleShowPhoneNumber: function() {
			this.toggleProperty('isShowingPhoneNumber');
		}				
	}

});