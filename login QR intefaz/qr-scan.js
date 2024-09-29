// Variables para la cámara y el video
const video = document.getElementById('qr-video');
const restartQRButton = document.getElementById('restart-qr');

// Inicia la cámara
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.error("Error al acceder a la cámara: " + err);
    });

// Reinicia la cámara al hacer clic en "Reiniciar código QR"
restartQRButton.addEventListener('click', function() {
    video.srcObject.getTracks().forEach(track => track.stop()); // Detener la cámara
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }) // Reiniciar
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function(err) {
            console.error("Error al reiniciar la cámara: " + err);
        });
});
