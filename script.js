'use strict';

// input variable

const emailInput = document.querySelector('.email-input');

// button variables
const buttonNotfication = document.querySelector('.notification-button');

buttonNotfication.addEventListener('click', function () {
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/i;

  // Check for input value
  if (emailInput.value === '') {
    alert(`Whoops! It looks like you forgot to add your email`);
  } else {
    alert(`Please provide a valid email address`);
  }

  // Validate email
  function validateEmail(email) {
    emailPattern;
    return emailPattern.test(email);
  }

  if (validateEmail(emailInput.value)) {
    alert(`Email is valid `);
  } else {
    alert(`Please provide a valid email address`);
  }
});
