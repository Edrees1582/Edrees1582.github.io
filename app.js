const menuBtn = document.querySelector('.menuBtn');
const closeBtn = document.querySelector('.closeBtn');
const menuItems = document.querySelector('.menuItemsDiv');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('hidden');
    menuBtn.classList.toggle('shown');
    menuItems.classList.toggle('shown');
    closeBtn.classList.toggle('shown');
    menuItems.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('hidden');
    menuBtn.classList.toggle('shown');
    menuItems.classList.toggle('shown');
    closeBtn.classList.toggle('shown');
    menuItems.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
});