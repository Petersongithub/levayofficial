var main = function() {
  var header = $('<header>').prependTo('body');
  var NavBar = $('<div>').addClass('Navbar').prependTo($header);
  var NavList = $('<ul>').addClass('NavList').prependTo($NavBar);
  var VideosTab = $('<li>').addClass('SmallTab').appendTo($NavList).text('Videos');
};
$(document).ready(main);
