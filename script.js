const fomulario = document.querySelector('#form-grup');

function validarFomulario(evento) {
    evento.preventDefault();

    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;

    /*Validação do nome com regex*/
    if (validarNome(nome)) {
        console.log("Nome válido!");
    } else {
        alert("Nome inválido!");
    }

    /*Validação do sobrenome com regex*/
    if (validarSobrenome(sobrenome)) {
        console.log("Sobrenome válido!");
    } else {
        alert("Sobrenome inválido!");
    }
}

function validarNome(nome) {
    // Expresão regular que aceita letras maiúsculas e minúsculas, espaços e apóstrofos
    const regexName = /^[a-zA-ZÀ-ú\s']+$/;
    // Verifica se o sobrenome corresponde ao padrão
    return regexName.test(nome);
}

function validarSobrenome(sobrenome) {
    // Expressão regular que aceita letras maiúsculas e minúsculas, espaços e apóstrofos
    const regexSobrenome = /^[a-zA-ZÀ-ú\s']+$/;
    // Verifica se o sobrenome corresponde ao padrão
    return regexSobrenome.test(sobrenome);
}

fomulario.addEventListener('submit', validarFomulario);