var nome = window.document.getElementById('nome')
var email = window.document.getElementById('email')
var senha = window.document.getElementById('senha')
var rpsenha = window.document.getElementById('rpsenha')
var txtok = false;


function validarsenha(){
if(senha.value!=rpsenha.value){
alert("senha nao corresponde")
}else{
    
        alert("enviado com sucesso!")
    
}

}

function validationText() {
    var txtWarning = window.document.getElementById('txtWarning')
    if (nome.value.length < 3 || email.value.length < 5) {
        txtWarning.innerHTML = "preencha todos os campos!";
        txtWarning.style.color = "red";
        var txtok = false;

    } else {
        txtWarning.innerHTML = "";
        var txtok = true;
    }

}



