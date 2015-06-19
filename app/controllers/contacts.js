import Ember from 'ember';

export default Ember.Controller.extend({
	
	
	nameFromInput: ' ',
	phoneFromInput: ' ',

	// nothingThere: Ember.computed.empty('nothingThere');
	// fix this!!


	isShowingPhoneNumber: false,

	actions: {
	
		// toggleShowPhoneNumber() -- the future of javaScript!
		toggleShowPhoneNumber: function() {
	
			this.toggleProperty('isShowingPhoneNumber');
		},

		submit() {
			var newName = this.get('nameFromInput');
			var newPhone = this.get('phoneFromInput');

			// if (Ember.isBlank(newName) === '' || Ember.isBlank(newPhone) === '') {
			// 	return;
			// };

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