function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} Horas.`;
  if (hora >= 0 && hora < 12) {
    //Bom dia!!
    img.src = "manhã.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde!!
    img.src = "tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    //boa noite!!
    img.src = "noite.png";
    document.body.style.background = "#515154";
  }
}
