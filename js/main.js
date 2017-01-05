function agregaTarea() {
  var contenedor = document.getElementById('cont-nuevatarea');
  var tarea = document.getElementById('cajalista').value;
  document.getElementById('cajalista').value="";
 
  var lista = document.createElement('div');
  var elementoCheck = document.createElement('input');
  var contlista = document.createElement('span');
  var nodoTarea = document.createTextNode(tarea); // hijo del contenedor
  var eliminar_span = document.createElement('i'); // basurero icono
  var corazon_span = document.createElement('i'); // corazon icono
  
  lista.classList.add("lista", "row");
  elementoCheck.setAttribute("type", "checkbox");
  contlista.classList.add("span", "textolista");
  eliminar_span.classList.add("glyphicon", "glyphicon-trash");
  corazon_span.classList.add("glyphicon", "glyphicon-heart");

  lista.appendChild(elementoCheck);
  contlista.appendChild(nodoTarea);
  lista.appendChild(contlista);
  lista.appendChild(eliminar_span);
  lista.appendChild(corazon_span);
  contenedor.appendChild(lista);

  // tachar
  elementoCheck.addEventListener("click", function(){
    contlista.classList.toggle("tachado");
  })

  // corazon 
  corazon_span.addEventListener("click", function(){
    corazon_span.classList.toggle("corazon");
  })

  //elimino basurero
  eliminar_span.addEventListener("click", function(){
    contenedor.removeChild(lista);
  })

}
