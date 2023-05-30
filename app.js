const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    var dropdown = document.getElementsByClassName('dropdown-contentSocial')[0];
    var dropdownButton = document.getElementsByClassName('dropbtnSocial')[0];
    if (!event.target.matches('.dropbtnSocial') && !event.target.matches('.dropdown-contentSocial')) {
      dropdown.style.display = 'none';
    } else if (event.target.matches('.dropbtnSocial')) {
      dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    }
  });
  
  
  // Toggle the dropdown when the button is clicked
  var dropdownButton = document.getElementsByClassName('dropbtnSocial')[0];
  dropdownButton.addEventListener('click', function() {
    var dropdown = document.getElementsByClassName('dropdown-contentSocial')[0];
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  });

  // Toggle the dropdown when the button is clicked
var dropdownButton = document.getElementsByClassName('dropbtnSocial')[0];
dropdownButton.addEventListener('click', function() {
  var dropdown = document.getElementsByClassName('dropdown-contentSocial')[0];
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});

// Venstre

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    var dropdown = document.getElementsByClassName('dropdown-contentV')[0];
    var dropdownButton = document.getElementsByClassName('dropbtnV')[0];
    if (!event.target.matches('.dropbtnV') && !event.target.matches('.dropdown-contentV')) {
      dropdown.style.display = 'none';
    } else if (event.target.matches('.dropbtnV')) {
      dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    }
  });
  
  
  // Toggle the dropdown when the button is clicked
  var dropdownButton = document.getElementsByClassName('dropbtnV')[0];
  dropdownButton.addEventListener('click', function() {
    var dropdown = document.getElementsByClassName('dropdown-contentV')[0];
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  });

  // Toggle the dropdown when the button is clicked
var dropdownButton = document.getElementsByClassName('dropbtnV')[0];
dropdownButton.addEventListener('click', function() {
  var dropdown = document.getElementsByClassName('dropdown-contentV')[0];
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});

// Konservative

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  var dropdown = document.getElementsByClassName('dropdown-contentC')[0];
  var dropdownButton = document.getElementsByClassName('dropbtnC')[0];
  if (!event.target.matches('.dropbtnC') && !event.target.matches('.dropdown-contentC')) {
    dropdown.style.display = 'none';
  } else if (event.target.matches('.dropbtnC')) {
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
});

  // Toggle the dropdown when the button is clicked
  var dropdownButton = document.getElementsByClassName('dropbtnC')[0];
  dropdownButton.addEventListener('click', function() {
    var dropdown = document.getElementsByClassName('dropdown-contentC')[0];
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  });

  // Toggle the dropdown when the button is clicked
var dropdownButton = document.getElementsByClassName('dropbtnC')[0];
dropdownButton.addEventListener('click', function() {
  var dropdown = document.getElementsByClassName('dropdown-contentC')[0];
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});
$(document).ready(function() {
  $('.dropbtnSocial').click(function() {
    $(this).parent().toggleClass('open');
  });
});


// SF

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  var dropdown = document.getElementsByClassName('dropdown-contentSF')[0];
  var dropdownButton = document.getElementsByClassName('dropbtnSF')[0];
  if (!event.target.matches('.dropbtnSF') && !event.target.matches('.dropdown-contentSF')) {
    dropdown.style.display = 'none';
  } else if (event.target.matches('.dropbtnSF')) {
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
});

  // Toggle the dropdown when the button is clicked
  var dropdownButton = document.getElementsByClassName('dropbtnSF')[0];
  dropdownButton.addEventListener('click', function() {
    var dropdown = document.getElementsByClassName('dropdown-contentSF')[0];
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  });

  // Toggle the dropdown when the button is clicked
var dropdownButton = document.getElementsByClassName('dropbtnSF')[0];
dropdownButton.addEventListener('click', function() {
  var dropdown = document.getElementsByClassName('dropdown-contentSF')[0];
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});

// Enhedslisten

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  var dropdown = document.getElementsByClassName('dropdown-contentØ')[0];
  var dropdownButton = document.getElementsByClassName('dropbtnØ')[0];
  if (!event.target.matches('.dropbtnØ') && !event.target.matches('.dropdown-contentØ')) {
    dropdown.style.display = 'none';
  } else if (event.target.matches('.dropbtnØ')) {
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
});

  // Toggle the dropdown when the button is clicked
  var dropdownButton = document.getElementsByClassName('dropbtnØ')[0];
  dropdownButton.addEventListener('click', function() {
    var dropdown = document.getElementsByClassName('dropdown-contentØ')[0];
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  });

  // Toggle the dropdown when the button is clicked
var dropdownButton = document.getElementsByClassName('dropbtnØ')[0];
dropdownButton.addEventListener('click', function() {
  var dropdown = document.getElementsByClassName('dropdown-contentØ')[0];
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});

// Radikale

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  var dropdown = document.getElementsByClassName('dropdown-contentB')[0];
  var dropdownButton = document.getElementsByClassName('dropbtnB')[0];
  if (!event.target.matches('.dropbtnB') && !event.target.matches('.dropdown-contentB')) {
    dropdown.style.display = 'none';
  } else if (event.target.matches('.dropbtnB')) {
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
});

  // Toggle the dropdown when the button is clicked
  var dropdownButton = document.getElementsByClassName('dropbtnB')[0];
  dropdownButton.addEventListener('click', function() {
    var dropdown = document.getElementsByClassName('dropdown-contentB')[0];
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  });

  // Toggle the dropdown when the button is clicked
var dropdownButton = document.getElementsByClassName('dropbtnB')[0];
dropdownButton.addEventListener('click', function() {
  var dropdown = document.getElementsByClassName('dropdown-contentB')[0];
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});