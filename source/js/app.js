(function() {
  const toggleMenuButton = document.querySelector('.page-header__menu-toggle');
  const pageHeader = document.querySelector('.page-header');
  toggleMenuButton.addEventListener('click', () => {
    pageHeader.classList.toggle('page-header--menu-opened');
  });
})();
