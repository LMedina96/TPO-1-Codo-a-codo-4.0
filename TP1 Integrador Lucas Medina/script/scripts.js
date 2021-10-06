/*ANIMACIÓN DE MOVER LOGOS*/
function moveLogo(a){
    const icon = document.getElementById("logo");

    if (a == 1){
        icon.style.animation = "dance 2s infinite";
    }else{
        icon.style.animation = "dance 2s 0s";
    }
}

function masInfo(a){
  document.getElementById('extra' + [a]).style.display = 'flex';
  document.getElementById('button' + [a]).style.display = 'none';
}

// Disable form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();