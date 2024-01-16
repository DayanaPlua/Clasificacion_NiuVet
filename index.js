function verificarValor() {
    // Obtener el valor ingresado por el usuario
    var valorIngresado = document.getElementById('codigo').value;

    // Valor preestablecido
    var valorPreestablecido = '123456';

    // Verificar si el valor ingresado es igual al valor preestablecido
    if (valorIngresado === valorPreestablecido) {
        // Redirigir a otra página web
        window.location.href = 'http://localhost:8000/evalue.html';
    } else {
        // Mostrar un mensaje si el valor no coincide (esto puede modificarse según tus necesidades)
        alert('El valor ingresado no es válido. Inténtelo de nuevo.');
    }
}

document.getElementById('ingresar').addEventListener('click', verificarValor);