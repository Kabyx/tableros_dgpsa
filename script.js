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

function mostrar_map_comunidades(){
  var comunidad = document.getElementById("box_dispositivos").options[document.getElementById("box_dispositivos").selectedIndex].text;
  var mapa = document.getElementById("mapa_google")
  var ambulatorios_baja_intensidad_cant = document.getElementById("ambulatorios_baja_intensidad_cant");
  var ambulatorios_alta_intensidad_cant = document.getElementById("ambulatorios_alta_intensidad_cant");
  var residenciales_bajo_cant = document.getElementById("residenciales_bajo_cant");
  var residenciales_alto_cant = document.getElementById("residenciales_alto_cant");
  if(comunidad === "Selecciona un dispositivo") /*predeterminado */
  {
    mapa.src = ""
    mapa.style.display = "none"
    ambulatorios_baja_intensidad_cant.innerHTML = "0"
    ambulatorios_alta_intensidad_cant.innerHTML = "0"
    document.getElementById("container_modalidades").style.display = "none"
  }
  
  if(comunidad === "El Reparo")
  {
    mapa.style.display = "inline-block"
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.611082817589!2d-58.46348224860645!3d-34.563401262778335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d5a3c572a9%3A0x2605b95b3eee14e!2sEL%20REPARO%20COMUNIDAD%20TERAP%C3%89UTICA!5e0!3m2!1ses!2sar!4v1678980221257!5m2!1ses!2sar"
    ambulatorios_baja_intensidad_cant.innerHTML = "15"
    ambulatorios_alta_intensidad_cant.innerHTML = "0"
    residenciales_bajo_cant.innerHTML= "7"
    residenciales_alto_cant.innerHTML= "7"
    document.getElementById("container_modalidades").style.display = "block"
  }

  if (comunidad === "El Almendro") {
    mapa.style.display = "inline-block"
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.6258748656423!2d-58.51643504860468!3d-34.63889356677254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc84962a92b9f%3A0xa5e3e9161d26c25c!2sEl%20Almendro!5e0!3m2!1ses!2sar!4v1678980571442!5m2!1ses!2sar"
    ambulatorios_baja_intensidad_cant.innerHTML = "7"
    ambulatorios_alta_intensidad_cant.innerHTML = "8"
    residenciales_bajo_cant.innerHTML= "0"
    residenciales_alto_cant.innerHTML= "0"
    document.getElementById("container_modalidades").style.display = "block"
  }

  if(comunidad ==="Raices - Coincidencias")
  {
    mapa.style.display ="inline-block"
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6563.929636302047!2d-59.4578963184281!3d-34.65559142471962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc7341483678b1%3A0xf4aa0bcc9a6b1e1a!2sCOINCIDENCIA%20-%20Asociaci%C3%B3n%20Civil.%20(C3)%20(D3)%20%2F%20III!5e0!3m2!1ses!2sar!4v1679323236932!5m2!1ses!2sar"
    ambulatorios_baja_intensidad_cant.innerHTML = "0"
    ambulatorios_alta_intensidad_cant.innerHTML = "0"
    residenciales_bajo_cant.innerHTML= "14"
    residenciales_alto_cant.innerHTML= "12"
    document.getElementById("container_modalidades").style.display = "block"

  }


}