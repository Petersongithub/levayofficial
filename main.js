var main = function() {
  create();
};
var create = function() {
    var $PageTop = $(<header>
      <div class="Navbar">
        <ul class="NavList">
          <li class="SmallTab">Videos</li>
          <li class="SmallTab">Music</li>
          <li class="SmallTab">Gallery</li>
          <li class="LargeTab"></li>
          <li class="SmallTab">News</li>
          <li class="SmallTab">About</li>
          <li class="SmallTab">Shop</li>
        </ul>
      </div>
    </header>)
  };
$(document).ready(main);
