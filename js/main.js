function agregaTarea() {
  var tarea = getElementsById('cajalista');
  var contenedorLista = getElementsById('contlista');
  var lista = documentCreateElemente('div');

  var elementoLista = document.createElement('p');
  var elementoLinea = document.createElement('br');

  var nodoTarea = createTextNodo(tarea);

  elementoLista.appendChild(nodoTarea);

  lista.appendChild(elementoLista);
  lista.appendChild(elementoLinea);

  lista.setAttribute("class", "lista");

  contenedorLista.appendChild(lista);

}
