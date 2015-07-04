import Ember from 'ember';

export default Ember.Controller.extend({
	
	queryParams: ['isShowingPhoneNumber'],
	
	nameFromInput: '',
	phoneFromInput: '',
	emailFromInput: '',
	
	// isNameEmpty: Ember.computed.empty('name'),
	// isPhoneEmpty: Ember.computed.empty('phone'),
	// nothingThere: Ember.computed.and('isNameEmpty', 'isPhoneEmpty'),

	isNameEmpty: Ember.computed.empty('nameFromInput'),
	isPhoneEmpty: Ember.computed.empty('phoneFromInput'),
		
	nothingThere: Ember.computed.or('isNameEmpty', 'isPhoneEmpty'),

	isShowingPhoneNumber: false,


	contactsWithEmail: function() {
		var model = this.get('model');
		var filteredModel = model.filterBy('email');
		return filteredModel.get('length');
	}.property('model.@each'),

	capitalName: function() {
		var name = this.get('nameFromInput');
		return name.toUpperCase();
	}.property('nameFromInput'),

	nameChanged: function() {
		this.set('nameFromInput', this.get('capitalName'));
	}.observes('nameFromInput'),


	// do the dasherized function...

	// check ember computed docs..
	// check ember object model


	actions: {
	
		// toggleShowPhoneNumber() -- the future of javaScript!
		toggleShowPhoneNumber: function() {
	
			this.toggleProperty('isShowingPhoneNumber');
		},

		addNewContact: function() {

			if (this.get('nothingThere')) {
					return;
				}

			var newName = this.get('nameFromInput');
			var newPhone = this.get('phoneFromInput');
			var newEmail = this.get('emailFromInput');


			// if (Ember.isBlank(newName) === '' || Ember.isBlank(newPhone) === '') {
			// 	return;
			// };


			var newContact = this.store.createRecord('contact', {
				name: newName,
				phone: newPhone,
				email: newEmail
			});

			newContact.save();

			this.set('name', '');
			this.set('phone', '');
			this.set('email', '');
		},

		deleteContact(item) {
			item.destroyRecord();
		}


	}
});