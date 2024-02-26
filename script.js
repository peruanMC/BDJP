document.addEventListener('DOMContentLoaded', function () {
    var colors = ['#ffcc00', '#ff66b2', '#66b2ff', '#99ff66']; // Lista de colores
    var currentIndex = 0;

    function changeBackgroundColor() {
        document.body.style.background = colors[currentIndex];

        // Incrementa el índice y reinicia si alcanza el final de la lista
        currentIndex = (currentIndex + 1) % colors.length;
    }

    // Cambia el fondo cada 0.5 segundos
    setInterval(changeBackgroundColor, 500);

    // Reproduce el audio al cargar la página
    var audioPlayer = document.getElementById('audioPlayer');
    
    // Intenta reproducir automáticamente y maneja posibles errores
    audioPlayer.play().then(function() {
        // Exito
    }).catch(function(error) {
        console.log("Error al reproducir el audio:", error);
    });

    // Oculta el botón de reproducción
    audioPlayer.style.display = 'none';
});
