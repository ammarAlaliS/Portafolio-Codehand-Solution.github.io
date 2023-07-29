const IconClose = document.getElementById('IconClose');
const menuContainer = document.getElementById('menu_container');
const openMenuIcon = document.getElementById('openMenuIcon');
const linksMenu = document.querySelectorAll('.linksMenu');
function openMenu() {
  menuContainer.style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  menuContainer.style.display = 'none';
  document.body.style.overflow = 'auto';
}
openMenuIcon.addEventListener('click', openMenu);
IconClose.addEventListener('click', closeMenu);
linksMenu.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
