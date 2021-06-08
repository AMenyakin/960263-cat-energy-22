(function() {
  var header = document.querySelector('.page-header');
  if (header) {
    header.classList.remove('page-header--no-js');
  }
})();

(function() {
  var toggleMenuButton = document.querySelector('.toggle-menu-button');
  var pageHeader = document.querySelector('.page-header');

  toggleMenuButton.addEventListener('click', function() {
    pageHeader.classList.toggle('page-header--menu-opened');
  });
})();
