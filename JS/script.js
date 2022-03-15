function gritar() {
    alert("AHHHHHHHHHHHHHAAAAAAAAAAAAHHHHHHHHHH");
}

function perguntar() {
    var nome
    nome = prompt("Qual eh o seu nome? ")
    alert("Opa " + nome + " beleza?!")
}

function mudarTexto() {
    var h1 = document.getElementsByTagName("h1")

   if(h1[0].innerText == "Curso Web") {
         h1[0].innerText = "Vai Curintia!!!"
   } else {
          h1[0].innerText = "Curso Web"
   }
}


