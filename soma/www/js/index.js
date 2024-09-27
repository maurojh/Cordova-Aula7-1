document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', verifica);
}

function verifica() {
    var campo = document.getElementById('campo');
    //var digitado = parseFloat(campo.value);
    console.log(campo.value);
    if(campo.value != '') {
        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
    } else {
        console.log('nada');
    }
}

function alertDismissed() {
    console.log('botão ok apertado!');
}

