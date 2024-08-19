// OCULTAR
const cuadros = document.querySelectorAll('.cuadro');

const botonOcultar = document.querySelector('button:nth-of-type(1)');

let oculto = false;

function ocultarElementosPares() {
  cuadros.forEach((cuadro, index) => {
      const numero = parseInt(cuadro.textContent);
      if (numero % 2 === 0) { 
          cuadro.style.visibility = oculto ? 'visible' : 'hidden';
      }
  });
  oculto = !oculto; 
}

botonOcultar.addEventListener('click', ocultarElementosPares);


// Cambiar color
const botonCambiarColor = document.querySelector('button:nth-of-type(2)');

function cambiarColorRojo() {
    const elementosDeTexto = document.querySelectorAll('body *');
    
    elementosDeTexto.forEach(elemento => {
        elemento.style.color = 'red';
    });
}

botonCambiarColor.addEventListener('click', cambiarColorRojo);

// Agregar Texto
function agregarTextoInverso() {
  const nombre = prompt('Ingrese un nombre:');

  if (nombre !== null && nombre !== '') {
      const letras = nombre.split('');
      const nombreSeparado = letras.reverse().join(' ');
      
      const footer = document.querySelector('footer');
      footer.textContent = nombreSeparado;
  }
}

const botonAgregarTexto = document.querySelector('button:nth-of-type(3)');
botonAgregarTexto.addEventListener('click', agregarTextoInverso);

//Pares e Impares
function validarNumero(numero) {
  if (numero % 2 === 0) {
      return 'par';
  } else {
      return 'impar';
  }
}

function handleClickNumero(event) {
  const numero = parseInt(event.target.textContent);
  const resultado = validarNumero(numero);
  const headerContent = `El número ${numero} es ${resultado}.`;
  const headerContainer = document.querySelector('.header-container');
  headerContainer.textContent = headerContent;
}

const elementosNumeros = document.querySelectorAll('.cuadro');

elementosNumeros.forEach(elemento => {
  elemento.addEventListener('click', handleClickNumero);
});
