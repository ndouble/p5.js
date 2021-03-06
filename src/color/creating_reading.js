define(function (require) {

  'use strict';

  var Processing = require('core');
  var calculation = require('math.calculation');

  Processing.prototype.alpha = function(rgb) {
    if (rgb.length > 3) {
      return rgb[3];
    } else {
      return 255;
    }
  };

  Processing.prototype.blue = function(rgb) {
    if (rgb.length > 2) {
      return rgb[2];
    } else {
      return 0;
    }
  };

  Processing.prototype.brightness = function(hsv) {
    if (hsv.length > 2) {
      return hsv[2];
    } else {
      return 0;
    }
  };

  Processing.prototype.color = function() {
    return this.getNormalizedColor(arguments);
  };

  Processing.prototype.green = function(rgb) {
    if (rgb.length > 2) {
      return rgb[1];
    } else {
      return 0;
    }
  };

  Processing.prototype.hue = function(hsv) {
    if (hsv.length > 2) {
      return hsv[0];
    } else {
      return 0;
    }
  };

  Processing.prototype.lerpColor = function(c1, c2, amt) {
    var c = [];
    for (var i=0; i<c1.length; i++) {
      c.push(calculation.lerp(c1[i], c2[i], amt));
    }
    return c;
  };

  Processing.prototype.red = function(rgb) {
    if (rgb.length > 2) {
      return rgb[0];
    } else {
      return 0;
    }
  };

  Processing.prototype.saturation = function(hsv) {
    if (hsv.length > 2) {
      return hsv[1];
    } else {
      return 0;
    }
  };

  return Processing;

});
