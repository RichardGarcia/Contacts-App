import Ember from 'ember';

export default Ember.Controller.extend({
	
	
	nameFromInput: ' ',
	phoneFromInput: ' ',

	isShowingPhoneNumber: false,

	actions: {
	
		// toggleShowPhoneNumber() -- the future of javaScript!
		toggleShowPhoneNumber: function() {
	
			this.toggleProperty('isShowingPhoneNumber');
		},

		submit() {
			var newName = this.get('nameFromInput');
			var newPhone = this.get('phoneFromInput');

			var newContact = this.store.createRecord('contact', {
				name: newName,
				phone: newPhone
			});

			newContact.save();

			this.set('nameFromInput', '');
			this.set('phoneFromInput', '');
		},

	deleteContact(item) {
		item.destroyRecord();
	}


	}
});