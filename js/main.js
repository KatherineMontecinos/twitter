function agregaTarea() {
  var tarea = document.getElementById('cajalista').value;
  var contenedorLista = document.getElementById('contlista');
  var lista = document.createElement('div');

  
  var elementoCheck = document.createElement('input');
  elementoCheck.type ='checkbox';

  var elementoLista = document.createElement('p');

  var elementoBorrar = document.createElement('span');
  elementoBorrar.setAttribute("class", "glyphicon glyphicon-trash pull-right");

  var nodoTarea = document.createTextNode(tarea);

  elementoLista.appendChild(nodoTarea);

  
  lista.appendChild(elementoCheck);
  lista.appendChild(elementoLista);
  lista.appendChild(elementoBorrar);

  lista.setAttribute("class", "elementoCheck", "lista", "elementoBorrar");

  contenedorLista.appendChild(lista);

}

