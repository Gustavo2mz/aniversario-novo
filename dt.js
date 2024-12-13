function atualizarContagem() {
    const agr = new Date();
    const aniversario = new Date(2025, 5, 28, 23, 59, 59); // Mês é 0-indexado
    const diferencaAgr = aniversario - agr;
  
    if (diferencaAgr > 0) {
      const segundos = Math.floor((diferencaAgr / 1000) % 60);
      const minutos = Math.floor((diferencaAgr / (1000 * 60)) % 60);
      const horas = Math.floor((diferencaAgr / (1000 * 60 * 60)) % 24);
      const dias = Math.floor((diferencaAgr / (1000 * 60 * 60 * 24)) % 30);
      const mes = Math.floor(diferencaAgr / (1000 * 60 * 60 * 24 * 30));
  
      document.getElementById("minha-div").innerHTML =
        "Faltam " +
        mes +
        "m " +
        dias +
        "d " +
        horas +
        "h " +
        minutos +
        "m " +
        segundos +
        "s ";
    } else {
      document.getElementById("minha-div").innerHTML = "A data já chegou!";
    }
  }
  

  setInterval(atualizarContagem, 1000);

  atualizarContagem();
  