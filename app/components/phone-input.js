import Ember from 'ember';

// fix this!!!
// becomeFocused: function() {
// 	this.$().focus();
// }.on('didInsertElement'),

export default Ember.TextField.extend({
	valueChanged: Ember.observer('value', function() {
		var value = this.get('value');
		var valueNumber = value.replace(/\D/g, '');

			if (!Ember.isEmpty(valueNumber)) {
				valueNumber = valueNumber.match(/\d{1,3}/g).join('-');
			}

		this.set('value', valueNumber);
	})
});
