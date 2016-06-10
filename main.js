var main = function() {
  var $header = $(<header/>);
  var $NavBar = $(<div/>).addClass('Navbar').prepend($header);
  var $NavList = $(<ul/>).addClass('NavList').prepend($NavBar);
  var $VideosTab = $(<li/>).addClass('SmallTab').append($NavList).text("Videos");
};
$(document).ready(main);
