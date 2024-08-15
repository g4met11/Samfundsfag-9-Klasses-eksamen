const { iconButtonClasses } = require("@mui/material");

function CheckDemo(id) {
  // var id = getElementById(Element);
  if (id === "Parti1Btn") {
    document.getElementById("Parti1").classList.toggle("show");
  } else if (id === "Parti2Btn") {
    document.getElementById("Parti2").classList.toggle("show");
  }
}

// Closes dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





// Login forum
function pswInput() {
  var x = document.getElementById("pswInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}