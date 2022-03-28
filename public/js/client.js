/* global TrelloPowerUp */
var requirejs = require('requirejs');
requirejs.config({
    nodeRequire: require
});
var Promise = TrelloPowerUp.Promise;
var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';
TrelloPowerUp.initialize({
 // Start adding handlers for your capabilities here!
	'card-buttons': function(t, options) {
		return [{
			icon: BLACK_ROCKET_ICON,
			text: 'Test power up',
      callback : function(){
       requirejs(['fetch-node'],
function   (fetch) {
    fetch('https://api.trello.com/1/lists?name={name}&idBoard=5abbe4b7ddc1b351ef961414', {
  method: 'POST'
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));
});
      }
		}];
	},
});
