const IconClose = document.getElementById('IconClose');
const menu_container = document.getElementById('menu_container');
const openMenuIcon = document.getElementById('openMenuIcon');
const body = document.getElementById('body');
const linksMenu = document.querySelectorAll('.linksMenu');
function openMenu(){
    menu_container.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeMenu(){
    menu_container.style.display = 'none';
    document.body.style.overflow = 'auto';
}
openMenuIcon.addEventListener('click', openMenu);
IconClose.addEventListener('click', closeMenu);
linksMenu.forEach(link => {
    link.addEventListener('click', closeMenu);
});