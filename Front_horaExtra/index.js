function enviarDados(){
    var txtRacf = document.getElementById("txtRacf").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Digitados = "+txtRacf+" / "+txtSenha)

    //passo1 = crio a variavel do corpo da mensagem para o Login
    var msgBody ={
        racf: txtRacf,
        senha: txtSenha
    };

    // passo 2 crio o cabeçalho dessa mensagem
    var cabecalho = {
        method : "POST",
        body : JSON.stringify(msgBody),
        headers : {
            "Content-type":"application/json"
        }
    };

    fetch("http://localhost:8088/usuarios/login", cabecalho).then( res => trataStatus(res));
}

function trataStatus(res){
    if (res.status ==200){
        res.json().then(objUser => redirecionar(objUser));
    }
    else if (res.status ==404){
        document.getElementById('msgErro').innerHTML = "Usuário Desconhecido";
    }
    else if (res.status ==401){
        document.getElementById('msgErro').innerHTML = "Senha Invalida";
    }
    else {
        document.getElementById('msgErro').innerHTML = "Erro Desconhecido";
    }
}

function redirecionar(objUser){
    localStorage.setItem("userHE", JSON.stringify(objUser));
    console.log(objUser);
    if (objUser.gestor ==1){
        window.location = "gestor.html";
    }
    else {
        window.location = "colaborador.html";
    }
}