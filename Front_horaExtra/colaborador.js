function carregaInfo(){
    // recupero do localStorage arquilo que eu armazenei
    var strUser = localStorage.getItem("userHE");
    // vou converter essa string para um objeto e manipulá-lo
    var objUser =JSON.parse(strUser);
    var img = `<img src="${objUser.linkfoto}" width="100%">`;
    var info = `Nome: ${objUser.nome} <br>
                RACF: ${objUser.racf} <br>
                e-mail: ${objUser.email} <br>`
    
    document.getElementById("imgUsuario").innerHTML = img;
    document.getElementById("infoUsuario").innerHTML = info;
    var relatorio = "";
    for (i=0; i<objUser.listaOcorencias.length; i++){
        var oc = objUser.listaOcorencias[i];
        var just;
        
        relatorio = relatorio +
        `
        <div class="row"> 
           <div class="col-2"><a href="justificativa.html?num=${oc.numSeq}">${oc.data}</a></div>
           <div class="col-4">${oc.atividade.nome}</div>
           <div class="col-2">${oc.numHoras}</div>
           <div class="col-3">${oc.descricao}</div>
           <div class="col-1">${oc.status}</div>
        </div>      
        `;

        
    }
    document.getElementById("relatorio").innerHTML = relatorio;
}


function logout(){
    localStorage.removeItem("userHE");
    window.location = "index.html";
}


   function preencheLista(lista){

       
   }