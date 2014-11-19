/**
 * BudaGame test app
 * author: David Breuer
 * licence: MIT
 */
var Settings = require('settings');
var UI = require('ui');
var Vector2 = require('vector2');

Settings.config(
  { url: 'http://www.davidbreuer.co.uk' },
  function(e) {
    console.log('closed configurable');

    // Show the parsed response
    console.log(JSON.stringify(e.options));

    // Show the raw response if parsing failed
    if (e.failed) {
      console.log(e.response);
    }
  }
);



var wind = new UI.Window({ fullscreen: true });
var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'images/budagame_big_icon.png'
});
wind.add(image);
wind.show();