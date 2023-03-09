window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
    
}


function mostrarFunction_2022(){
  var tableros_22 = document.getElementById("powerbi-2022-desplegado");
  var boton_22 = document.getElementById("mostrar-button-2022");
  if (tableros_22.style.display ==="none")
  {
    
    tableros_22.style.display ="block";
    boton_22.innerHTML ="Ocultar <";
  } 
  
  else
  {
    tableros_22.style.display = "none";
    boton_22.innerHTML = "Mostrar >";
  }

}

function mostrarFunction_2023(){
  var tableros_23 = document.getElementById("powerbi-2023-desplegado");
  var boton_23 = document.getElementById("mostrar-button-2023");
  if (tableros_23.style.display ==="none")
  {
    
    tableros_23.style.display ="block";
    boton_23.innerHTML ="Ocultar <";
  } 
  
  else
  {
    tableros_23.style.display = "none";
    boton_23.innerHTML = "Mostrar >";
  }

}