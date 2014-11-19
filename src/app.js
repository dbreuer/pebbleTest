/**
 * BudaGame test app
 * author: David Breuer
 * licence: MIT
 */
//var Settings = require('settings');
var UI = require('ui');
//var Vector2 = require('vector2');

var splashScreen = new UI.Card({ banner: 'images/budagame_big_icon.png' });
splashScreen.show();

var mainScreen = new UI.Menu({
  sections: [{
    title: 'This is the begining',
    items: [{
      title: 'First Item',
      subtitle: 'Some subtitle',
      icon: 'images/budagame_icon.png'
    }, {
      title: 'Second item'
    }]
  }]
});

mainScreen.on('select', function(e) {
  console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
  console.log('The item is titled "' + e.item.title + '"');
});

setTimeout(function() {
  // Display the mainScreen
  mainScreen.show();
  // Hide the splashScreen to avoid showing it when the user press Back.
  splashScreen.hide();
}, 1000);