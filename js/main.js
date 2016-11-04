function agregaTarea() {
  var tarea = document.getElementById('cajalista').value;
  var contenedorLista = document.getElementById('contlista');
  var lista = document.createElement('div');

  var elementoLista = document.createElement('p');
  
  var elementoBorrar = document.createElement('span');
  elementoBorrar.setAttribute("class", "glyphicon glyphicon-trash");
  
  var elementoCheck = document.createElement('input');
  elementoCheck.type ='checkbox';
  elementoCheck.setAttribute("class", "checkbox");

  var nodoTarea = document.createTextNode(tarea);

  elementoLista.appendChild(nodoTarea);

  lista.appendChild(elementoLista);
  lista.appendChild(elementoBorrar);
  lista.appendChild(elementoCheck);


  lista.setAttribute("class", "lista", "elementoCheck", "elementoBorrar");

  contenedorLista.appendChild(lista);

}
