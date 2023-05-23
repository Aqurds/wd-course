// Mobile menu toggle code
const openMobileMenu = document.querySelector('#mobile-menu-open');
const closeMobileMenu = document.querySelector('.mobile-menu-close');
const mobileMenuWrapper = document.querySelector('.top-nav-mobile');
const mobileMenuState = {
  open: 'block',
  close: 'none',
};

function toggleMobileMenu(state) {
  if (state === mobileMenuState.open) {
    mobileMenuWrapper.style.display = mobileMenuState.open;
  } else {
    mobileMenuWrapper.style.display = mobileMenuState.close;
  }
}

openMobileMenu.addEventListener('click', () => { toggleMobileMenu(mobileMenuState.open); });
closeMobileMenu.addEventListener('click', () => { toggleMobileMenu(mobileMenuState.close); });