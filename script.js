'use strict';

// input variable

const emailInput = document.querySelector('.email-input');
emailInput.value;

// button variables

const buttonNotfication = document.querySelector('.notification-button');

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

buttonNotfication.addEventListener('click', function () {
  //   console.log(emailInput.value);
  emailInput.value === emailPattern;
  if (emailInput.value === '') {
    alert(`Whoops! It looks like you forgot to add your email`);
  } else if (emailInput.value != emailPattern) {
    alert(`Please provide a valid email address`);
  } else {
    alert(`Your email address is good `);
  }
  //   TODO SOlVE THE ISSUE WITH  "emailInput.value != emailPattern"
});
