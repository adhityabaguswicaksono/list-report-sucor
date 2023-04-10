document.addEventListener(
  'click',
  function (event) {
    if (
      event.target.matches('#dropdown-user') ||
      !event.target.closest('#dropdown-profile')
    ) {
      document.getElementById('dropdown-user').classList.add('hidden');
      document
        .getElementById('dropdown-user')
        .classList.remove('absolute', 'top-14', 'right-4');
    }
  },
  false
);

function functionDropdownProfile() {
  if (document.getElementById('dropdown-user').classList.contains('hidden')) {
    document.getElementById('dropdown-user').classList.remove('hidden');
    document
      .getElementById('dropdown-user')
      .classList.add('absolute', 'top-14', 'right-4', 'z-50');
  } else {
    document.getElementById('dropdown-user').classList.add('hidden');
    document
      .getElementById('dropdown-user')
      .classList.remove('absolute', 'top-14', 'right-4');
  }
}

function functionDropdownNavbar() {
  document.getElementById('sidebar').classList.remove('hidden');
  document.getElementById('sidebar').classList.add('w-full');
}

function functionCloseDropdownNavbar() {
  document.getElementById('sidebar').classList.add('hidden');
  document.getElementById('sidebar').classList.remove('w-full');
}
