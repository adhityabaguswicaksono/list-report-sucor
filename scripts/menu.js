function functionDropdownProfile() {
  if (
    !document
      .getElementById('dropdown-user')
      .classList.contains('translate-x-full')
  ) {
    document
      .getElementById('dropdown-user')
      .classList.add('translate-x-full', 'right-0');
    document
      .getElementById('dropdown-user')
      .classList.remove('translate-x-1', 'right-6');
  } else {
    document
      .getElementById('dropdown-user')
      .classList.add('translate-x-1', 'right-6');
    document
      .getElementById('dropdown-user')
      .classList.remove('translate-x-full', 'right-0');
  }
}

function functionDropdownNavbar() {
  document.getElementById('sidebar').classList.add('-translate-x-0');
  document.getElementById('sidebar').classList.remove('-translate-x-full');
}

function functionCloseDropdownNavbar() {
  document.getElementById('sidebar').classList.add('-translate-x-full');
  document.getElementById('sidebar').classList.remove('-translate-x-0');
}

document.addEventListener(
  'click',
  function (event) {
    if (
      event.target.matches('#dropdown-user') ||
      !event.target.closest('#dropdown-profile')
    ) {
      document
        .getElementById('dropdown-user')
        .classList.add('translate-x-full', 'right-0');
      document
        .getElementById('dropdown-user')
        .classList.remove('translate-x-1', 'right-6');
    }
    if (
      event.target.matches('#sidebar') ||
      !event.target.closest('#toogle-sidebar')
    ) {
      document.getElementById('sidebar').classList.add('-translate-x-full');
      document.getElementById('sidebar').classList.remove('-translate-x-0');
    }
  },
  false
);
