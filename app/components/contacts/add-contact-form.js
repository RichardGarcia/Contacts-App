import Ember from 'ember';

export default Ember.Component.extend({

	isNameEmpty: Ember.computed.empty('name'),
	isPhoneEmpty: Ember.computed.empty('phone'),
		
	nothingThere: Ember.computed.or('isNameEmpty', 'isPhoneEmpty'),

	// old computed properties..
	//
	// capitalName: function() {
	// 	var name = this.get('nameFromInput');
	// 	return name.toUpperCase();
	// }.property('nameFromInput'),

	// nameChanged: function() {
	// 	this.set('nameFromInput', this.get('capitalName'));
	// }.observes('nameFromInput')


	// change this to new computed properties syntax
	capitalName: function() {
		var name = this.get('name');
		return name.toUpperCase();
	}.property('name'),

	nameChanged: function() {
		this.set('name', this.get('capitalName'));
	}.observes('name'),

	actions: {
		buttonClicked() {
			if (this.get('nothingThere')) {return}

			var name = this.get ('name');
			var phone = this.get ('phone');
			var email = this.get ('email');

			this.sendAction('action', name, phone, email);

			this.set(name, '');
			this.set(phone, '');
			this.set(email, '');

		}
	}

});
