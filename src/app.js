/**
 * BudaGame test app
 * author: David Breuer
 * licence: MIT
 */
var splashScreen = new UI.Card({ banner: 'budagame_icon.png' });
splashScreen.show();

var mainScreen = new UI.Menu();

setTimeout(function() {
  // Display the mainScreen
  mainScreen.show();
  // Hide the splashScreen to avoid showing it when the user press Back.
  splashScreen.hide();
}, 400);



