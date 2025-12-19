function mostrarEventosScroll() {
  const eventos = document.querySelectorAll('.evento');

  eventos.forEach(evento => {
    const posicion = evento.getBoundingClientRect().top;
    const altoVentana = window.innerHeight;

    if (posicion < altoVentana - 100) {
      evento.classList.add('show');
    }
  });
}

window.addEventListener('scroll', mostrarEventosScroll);
window.addEventListener('DOMContentLoaded', mostrarEventosScroll);

/*Detecta scroll y activa la clase show*/

function mostrarEventosScroll() {
  const eventos = document.querySelectorAll('.evento');

  eventos.forEach(evento => {
    const posicion = evento.getBoundingClientRect().top;
    const altoVentana = window.innerHeight;

    if (posicion < altoVentana - 100) {
      evento.classList.add('show');
    }
  });
}

window.addEventListener('scroll', mostrarEventosScroll);
window.addEventListener('DOMContentLoaded', mostrarEventosScroll);

/* Galería */

document.addEventListener('DOMContentLoaded', () => {
  const carrusel = document.querySelector('.carrusel-fotos');
  const btnIzq = document.querySelector('.flecha.izq');
  const btnDer = document.querySelector('.flecha.der');

  const avanzar = () => {
    const scrollMax = carrusel.scrollWidth - carrusel.clientWidth;

    if (Math.ceil(carrusel.scrollLeft) >= scrollMax) {
      // Si ya está en el final, volver al inicio
      carrusel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carrusel.scrollBy({ left: carrusel.clientWidth, behavior: 'smooth' });
    }
  };

  const retroceder = () => {
    if (carrusel.scrollLeft <= 0) {
      // Ir al final si está al principio
      carrusel.scrollTo({ left: carrusel.scrollWidth, behavior: 'smooth' });
    } else {
      carrusel.scrollBy({ left: -carrusel.clientWidth, behavior: 'smooth' });
    }
  };

  btnDer?.addEventListener('click', avanzar);
  btnIzq?.addEventListener('click', retroceder);

  // Auto-slide cada 4 segundos
  setInterval(avanzar, 2500);
});

/*Carta */

document.getElementById('sobre-imagen').addEventListener('click', () => {
  const hoja = document.getElementById('hoja');
  const contenido = document.getElementById('contenido-carta');

  if (hoja.classList.contains('deslizar')) return;

  hoja.classList.add('deslizar');

  hoja.addEventListener('animationend', () => {
    contenido.classList.add('mostrar');
  }, { once: true });
});

const sobre = document.getElementById('sobre-imagen');
const hoja = document.getElementById('hoja');
const contenido = document.getElementById('contenido-carta');
const cerrar = document.getElementById('cerrar-carta');

let abierto = false;

function abrirCarta() {
  hoja.classList.remove('deslizar-abajo');
  hoja.style.display = 'block';
  hoja.classList.add('deslizar-arriba');

  hoja.addEventListener('animationend', () => {
    contenido.classList.add('mostrar');
    abierto = true;
  }, { once: true });
}

function cerrarCarta() {
  contenido.classList.remove('mostrar');
  hoja.classList.remove('deslizar-arriba');
  hoja.classList.add('deslizar-abajo');

  hoja.addEventListener('animationend', () => {
    hoja.style.display = 'none';
    abierto = false;
  }, { once: true });
}

sobre.addEventListener('click', () => {
  if (!abierto) {
    abrirCarta();
  }
});

cerrar.addEventListener('click', () => {
  if (abierto) {
    cerrarCarta();
  }
});

//Música

const toggleBtn = document.getElementById('toggle-musica');
const audio = document.getElementById('audio-fondo');
let musicaActiva = false;

toggleBtn.addEventListener('click', () => {
  if (!musicaActiva) {
    audio.play();
    toggleBtn.textContent = "🔊 Detener música de fondo";
  } else {
    audio.pause();
    toggleBtn.textContent = "🔇 Activar música de fondo";
  }
  musicaActiva = !musicaActiva;
});

/* Final*/

// function crearCorazonesFlotantes() {
//   const container = document.querySelector('.corazones-container');
//   for (let i = 0; i < 25; i++) {
//     const heart = document.createElement('span');
//     heart.style.left = Math.random() * 100 + 'vw';
//     heart.style.animationDuration = (3 + Math.random() * 3) + 's';
//     heart.style.background = ['#98FB98', '#90EE90', '#8FBC8F'][Math.floor(Math.random() * 3)];
//     heart.style.opacity = Math.random() * 0.8 + 0.2;
//     container.appendChild(heart);

//     setTimeout(() => {
//       heart.remove();
//     }, 6000);
//   }
// }

// // Repite la animación cada ciertos segundos
// setInterval(crearCorazonesFlotantes, 1000);





