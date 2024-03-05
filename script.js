const formulario = document.querySelector('#form-grup');

function validarFomulario(evento) {
    evento.preventDefault();

    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;

    /*Validação do nome com regex*/
    // if (validarNome(nome)) {
    //     console.log("Nome válido!");
    // } else {
    //     alert("Nome inválido!");
    // }

    // /*Validação do sobrenome com regex*/
    // if (validarSobrenome(sobrenome)) {
    //     console.log("Sobrenome válido!");
    // } else {
    //     alert("Sobrenome inválido!");
    // }
    // validarSexo()
    // validarDataNascimento()
    validarCor()
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
    const btnCor = document.querySelector('.btn-cor-favorita');
    const labelCor = document.querySelector('#label-cor');
    
    btnCor.addEventListener('click', function() {
        btnCor.classList.remove('cor-favorita');
        btnCor.remove();

        const inputCor = document.createElement('input');
        inputCor.setAttribute('type', 'color');
        inputCor.setAttribute('id', 'cor-favorita-selecionada');

        labelCor.insertAdjacentElement('beforeend', inputCor);
        // btnCor.insertAdjacentElement('afterbegin', inputCor)

    });
}

function validarCheckboxComida() {
    const checkedbox = document.querySelectorAll('.checkbox');
    let comidaSelecionada = false;

    checkedbox.forEach(function (input) {
        if (input.checked) {
            comidaSelecionada = true;
        }

        if (!comidaSelecionada) {
            alert('Selecione pelo menos uma comida favorita');
        } else {
            console.log('Comida seleciona:' + comidaSelecionada);
        }
    })
}

/*Validando CEP com a bibioleteca https://viacep.com.br/*/
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('ibge').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('ibge').value = (conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('ibge').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        }
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};
/*Fechando a validação do CEP*/

formulario.addEventListener('submit', validarFomulario);