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

function validarSexo() {
    const inputsSexo = document.querySelectorAll('.sexo');
    let sexoSelecionado = false;

    inputsSexo.forEach(function (input) {
        if (input.checked) {
            sexoSelecionado = true;
        }
    })
    //Verifica se input está marcado
    if (!sexoSelecionado) {
        alert('Selecione o campo sexo.');
    } else {
        console.log('Campo sexo selecionado.')
    }
}

function validarDataNascimento() {
    const data = document.querySelector('#data-nascimento')
    if (data === '') {
        alert('Informe a data de nascimento');
    } else {
        console.log('Data de Nascimento Selecionada.')
    }
}

function validarCor() {
    const cor = document.querySelector('#cor-favorita').value;
    const preto = '#000000';
    if (cor === preto) {
        alert('Selecione uma cor diferente do preto');
    } else {
        console.log('Cor selecionada:' + cor);
    }
}


fomulario.addEventListener('submit', validarFomulario);