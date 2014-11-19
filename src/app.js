/**
 * BudaGame test app
 * author: David Breuer
 * licence: MIT
 */
  //var Settings = require('settings');
  var UI = require('ui');
  //var Vector2 = require('vector2');
  //var Vibe = require('ui/vibe');
  var splashScreen = new UI.Card({ banner: 'images/budagame_big_icon.png' });

  splashScreen.show();

var mainScreen = new UI.Menu({
  sections: [{
    title: 'HurryApp',
    items: [{
      title: 'Show next',
      subtitle: 'Quick start'
    }, {
      title: 'Find next',
      subtitle: 'Select route'
    }]
  }]
});

mainScreen.on('select', function(e) {
  //console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
  //console.log('The item is titled "' + e.item.title + '"');
  var content = "Your train XY is the in 8 minutes";
  var detailCard = new UI.Card({
    title:'Details',
    subtitle:e.item.subtitle,
    body: content
  });
  detailCard.show();

});

setTimeout(function() {
  // Display the mainScreen
  mainScreen.show();
  // Hide the splashScreen to avoid showing it when the user press Back.
  splashScreen.hide();
}, 1000);