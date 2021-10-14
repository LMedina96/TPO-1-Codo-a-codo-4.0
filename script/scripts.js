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


/*VALIDACIÓN JAVASCRIPT REGISTRO*/

function takeValues(){
  var user = document.getElementById("validationDefaultUsername");

  localStorage.setItem("usuario", user.value);

  var passwd = document.getElementById("validationDefault03");

  localStorage.setItem("password", passwd.value);


  var contraseña1 = document.getElementById("validationDefault03").value;
  var contraseña2 = document.getElementById("validationDefault04").value;

  if (contraseña1 != contraseña2){
    alert("Las contraseñas no coinciden");
    return false;
  }else if(contraseña1 == contraseña2 && contraseña1 != ""){
    alert("¡Registro exitoso!");
    return true;
  }
}

let passwordStorage = localStorage.getItem("password");
let userStorage = localStorage.getItem("usuario");

/*VALIDACIÓN JAVASCRIPT LOGUEO*/

function validationLogin(){
  var userID = document.getElementById("uname").value;
  var passwordID = document.getElementById("pwd").value;

  if (userStorage == userID && passwordStorage == passwordID){
    alert("¡Bienvenido " + userID + "!");
    return true;
  }else{
    document.getElementById("msgIncorrecto").style.display = "block";
    return false;
  }
}