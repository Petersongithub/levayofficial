var main = function() {
  var header = $('<header>').prependTo('body');
  var NavBar = $('<div>').addClass('Navbar').prependTo($header);
  var NavList = $('<ul>').addClass('NavList').prependTo($NavBar);
  var VideosTab = $('<li>').addClass('SmallTab').appendTo($NavList).text('Videos');
  var Content = $('<div>').addClass('content').appendTo('body');
  var test = $('<li>').addClass('SmallTab').appendTo('.NavList').text("test");
};
$(document).ready(main);
