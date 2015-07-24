import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		
			// toggleShowPhoneNumber() --> the future of javaScript!, no more "function"
			// toggleShowPhoneNumber: function() {	
			// 	this.toggleProperty('isShowingPhoneNumber');
			// },

			addNewContact: function(nameFromInput, phoneFromInput, emailFromInput) {

				var newContact = this.store.createRecord('contact', {
					name: nameFromInput,
					phone: phoneFromInput,
					email: emailFromInput
				});

				newContact.save();
				this.transitionTo('contacts.index');
			}
		}	

});