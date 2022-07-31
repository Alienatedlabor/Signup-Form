function onChange() {
  const password = document.querySelector('input[name=password]');
  const confirm = document.querySelector('input[name=confirm]');
  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } else {
    confirm.setCustomValidity('Passwords do not match');
  }
}
//couldn't get progress bar to increment so I removed it. Leaving this for posterity so that some day I can add it back.
// const inputs = document.querySelectorAll('input');
// const progressBar = document.querySelector('#completion');

// function incrementProgressBar() {
//   inputs.forEach((input) => {
//     if (input.textContent !== '') {
//       progressBar.value = 16.6;
//     }
//   });
// }
