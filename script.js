const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const textoPrincipal = document.getElementById("texto");
const music = document.getElementById("musica");

// Ocultamos los botones al principio para que lean los mensajes
document.querySelector('.botones').style.display = 'none';

let scale = 1;
let clickCount = 0;

// 1. SECUENCIA DE MENSAJES INICIALES
const mensajesIniciales = [
    "Hola, mi amor...❤️ ",
    "Tengo algo especial que decirte...",
    "Me haces la persona más feliz del mundo",
    "Y por eso mismo...",
    "Necesito saber si..."
    "¿Quieres ser mi San Valentín? ❤️"
];

let msgIndex = 0;

function mostrarSecuencia() {
    if (msgIndex < mensajesIniciales.length) {
        textoPrincipal.innerText = mensajesIniciales[msgIndex];
        textoPrincipal.style.animation = "none"; // Reiniciar animación
        textoPrincipal.offsetHeight; // Truco para que la animación vuelva a empezar
        textoPrincipal.style.animation = "fadeIn 1s";
        
        msgIndex++;
        
        // Si es el último mensaje (la pregunta), mostramos los botones
        if (msgIndex === mensajesIniciales.length) {
            setTimeout(() => {
                document.querySelector('.botones').style.display = 'flex';
            }, 1000);
        } else {
            setTimeout(mostrarSecuencia, 2500); // Cambia el mensaje cada 2.5 segundos
        }
    }
}

// Iniciar la secuencia al cargar
mostrarSecuencia();

// 2. LÓGICA DEL BOTÓN NO
const mensajesNo = [
    "¿Estás seguro? 🧐",
    "Piénsalo bien... 🥺",
    "¡Porfi! 🌹",
    "Me vas a hacer llorar... 😭",
    "¡Di que sí! ✨"
    "¡Ya ni se ve!"
    "Obligado tonces"
];

noButton.addEventListener("click", () => {
    scale += 0.5;
    yesButton.style.transform = `scale(${scale})`;
    
    let currentNoScale = 1 - (clickCount * 0.15);
    if (currentNoScale > 0.3) {
        noButton.style.transform = `scale(${currentNoScale})`;
    } else {
        noButton.style.display = "none";
    }

    if (clickCount < mensajesNo.length) {
        noButton.innerText = mensajesNo[clickCount];
    }
    clickCount++;
});

// 3. LÓGICA DEL BOTÓN SÍ
yesButton.addEventListener("click", () => {
    music.volume = 0.5;
    music.play();

    document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: linear-gradient(135deg, #ff80ab 0%, #ff4081 100%); color: white; text-align: center; font-family: sans-serif; padding: 20px;">
            <h1 style="font-size: 3rem; margin-bottom: 20px;">¡SABÍA QUE DIRÍAS QUE SÍ! 😍❤️</h1>
            <img src="nosotros.jpg" alt="Nuestra Foto" style="width: 100%; max-width: 400px; border-radius: 15px; border: 8px solid white; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transform: rotate(-3deg);">
            <p style="font-size: 1.5rem; margin-top: 30px; font-style: italic;">"Nuestra historia es mi favorita."</p>
            <div style="font-size: 3rem; margin-top: 15px;">🌹✨🥂</div>
        </div>
    `;
});

// Activar audio con el primer clic
document.addEventListener("click", () => {
    if (music.paused) music.play().then(() => music.pause());
}, { once: true });
