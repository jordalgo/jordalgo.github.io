let $ = require('jquery');

function validateForm(email, message) {

  const emailVal = email.val();
  const messageVal = message.val();
  const patt1 = /(<|&lt;)(.|\n)*?(>|&gt;)/g;
  const patt2 = /http(s)?:/g;

  if (emailVal.indexOf('@') === -1) {
    alert ('Please enter a valid email address.');
    email.focus();
    return false;
  }

  if ((messageVal === '') || (messageVal === 'message')) {
    alert('Please enter the details for your enquiry.');
    message.focus();
    return false;
  }

  if (messageVal.match(patt1) || messageVal.match(patt2)) {
    alert('Your message had bad characters or a link. Please remove.');
    message.focus();
    return false;
  }
  return true;
}

export default function activate() {

  const email = $('#email-form');
  const message = $('#message-form');

  $('#contact-form').submit(function() {
    return validateForm(email, message);
  });
}

