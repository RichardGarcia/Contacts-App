// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
	this.get("session").fetch().catch(function() {});
  },

  actions: {
	signIn: function(provider, email, password) {
	  this.get("session").open("firebase", {
	  		provider: provider, 
	  		email: email, 
	  		password: password
	  	}).then(function(data) {
		
		console.log(data.currentUser);
	  });
	},

	signOut: function() {
	  this.get("session").close();
	}
  }
});




/*
import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.get("session").fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider, email, password) {
      this.get("session").open("firebase", { provider: provider, email: email, password: password}).then(function(data) {
        console.log(data.currentUser);
      });
    },

    signOut: function() {
      this.get("session").close();
    }
  }
});

*/