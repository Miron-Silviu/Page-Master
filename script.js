'use strict';

// input variable

const emailInput = document.querySelector('.email-input');

// button variables
const buttonNotfication = document.querySelector('.notification-button');

buttonNotfication.addEventListener('click', function () {
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  // Check for input value
  function validateEmail(email) {
    emailPattern;
    return emailPattern.test(email);
  }

  if (emailInput.value.trim() === '') {
    alert(`Whoops! It looks like you forget to add your email`);
  } else if (!validateEmail(emailInput.value)) {
    alert(`Please provide a valid email address`);
  } else {
    alert(`Your email addres is correct`);
  }
});
