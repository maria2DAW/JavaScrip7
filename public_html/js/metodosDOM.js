var d = document,
    ulList = d.querySelector('.main').querySelector('ul'),
    ulListChildren = ulList.children,
    liFundamentos = d.createElement('li'),
    liH2Fundamentos = d.createElement('h2'),
    liH2AFundamentos = d.createElement('a'),
    aText =  d.createTextNode('Métodos del DOM')
    //liItem = d.createElement('li'),
    //liText = d.createTextNode('Elemento de mi lista')
        ;

console.log(ulListChildren); //Devuelve el número de elementos hijos que contiene
console.log(ulListChildren[0].innerHTML, ulListChildren[5]);
//ulList.appendChild(liItem);
//ulList.removeChild(liItem);
//ulList.removeChild(ulListChildren[0]); //Elimina el primer elemento de la lista

liH2AFundamentos.href = 'index.html';
liH2AFundamentos.target = '_blank';

liH2AFundamentos.appendChild(aText);
liH2Fundamentos.appendChild(liH2AFundamentos);
liFundamentos.appendChild(liH2Fundamentos);
//ulList.appendChild(liFundamentos);

//Reemplazar elemetos ya existentes en la lista:
//ulList.replaceChild(ulListChildren[0], ulListChildren[5]); //Elemento viejo - Elemento nuevo

//Reemplazar por un elemento nuevo (creado con anterioridad):
//ulList.replaceChild(liFundamentos, ulListChildren[5]);

ulList.insertBefore(liFundamentos, ulListChildren[9] );  //Elemento que va a insertar - Elemento por referencia que va a insertar antes
        
//liItem.appendChild(liText);
//ulList.appendChild(liItem);

