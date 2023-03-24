tailwind.config = {
  theme: {
    extend: {
      colors: {
        sucorblue: 'rgba(59, 88, 148, 1)',
        'sucorblue-0': 'rgba(59, 88, 148, 0.1)',
        'sucorblue-1': 'rgba(59, 88, 148, 0.5)',
        'sucorblue-2': 'rgba(59, 88, 148, 0.75)',
      },
      maxWidth: {
        xxs: '16rem',
      },
    },
  },
};

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
