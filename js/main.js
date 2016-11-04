function agregaTarea() {
  var tarea = document.getElementById('cajalista').value;
  var contenedorLista = document.getElementById('contlista');
  var lista = document.createElement('div');

  var elementoLista = document.createElement('p');
  var elementoLinea = document.createElement('br');
  var elementoborrar = document.createElement('span');

  var nodoTarea = document.createTextNode(tarea);
  var nodoBorrar = document.createTextNode()

  elementoLista.appendChild(nodoTarea);

  lista.appendChild(elementoLista);
  lista.appendChild(elementoLinea);

  lista.setAttribute("class", "lista");

  contenedorLista.appendChild(lista);

}
