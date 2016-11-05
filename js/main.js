function agregaTarea() {
  var tarea = document.getElementById('cajalista').value;
  var contenedorLista = document.getElementById('contlista');
  var lista = document.createElement('div');

  var elementoCheck = document.createElement('input');
  elementoCheck.type ='checkbox';
  

  var elementoBorrar = document.createElement('span');
  elementoBorrar.setAttribute("class", "glyphicon glyphicon-trash pull-right");

  var elementoLista = document.createElement('p');

  var nodoTarea = document.createTextNode(tarea);

  elementoLista.appendChild(nodoTarea);
  
  lista.appendChild(elementoCheck);
  lista.appendChild(elementoLista);
  lista.appendChild(elementoBorrar);

  lista.setAttribute("class", "lista","elementoCheck", "elementoBorrar");

  contenedorLista.appendChild(lista);

}

  elementoCheck.onclick = tacharTarea;

function tacharTarea() {
  
  checkbox.classList.toggle('tachado');
}


function borrar(){
  var borrar = document.querySelector('span');
  borrar.addEventListener('click', function(){
    div.removeChild(lista);
  })
}

