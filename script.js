function ChecarGrau() {
    const esferico_esquerdo = document.getElementById("ee").value;
    const esferico_direito = document.getElementById("ed").value;
    const cilindrico_esquerdo = document.getElementById("ce").value;
    const cilindrico_direito = document.getElementById("cd").value;
    const lente = document.getElementById("lente");
    if (esferico_direito == 0 && esferico_esquerdo == 0 && cilindrico_direito == 0 && cilindrico_esquerdo == 0) {
        lente.innerHTML = "<p>Preencha algum campo</p>"
    } else {
        if ((cilindrico_direito <= 0 || cilindrico_esquerdo <= 0) && (cilindrico_direito >= -5 && cilindrico_esquerdo >= -5)) {
            if ((esferico_esquerdo <= 0 && esferico_esquerdo >= -15) && (esferico_direito <= 0 && esferico_direito >= -15)) {
                lente.innerHTML = "<p>Lente Vision</p>"
            }
        }

        if ((cilindrico_direito == 0 && cilindrico_esquerdo == 0) && (cilindrico_direito >= -2 && cilindrico_esquerdo >= -2)) {
            if ((esferico_esquerdo <= -3 && esferico_esquerdo >= -12) && (esferico_direito <= -3 && esferico_direito >= -12)) {
                lente.innerHTML = "<p>Lente Prime</p>"
            }
        }

        if ((cilindrico_direito < 0 || cilindrico_esquerdo < 0) && (cilindrico_direito >= -2 && cilindrico_esquerdo >= -2)) {
            if ((esferico_esquerdo <= -3 && esferico_esquerdo >= -10) && (esferico_direito <= -3 && esferico_direito >= -10)) {
                lente.innerHTML = "<p>Lente Prime</p>"
            }
        }

        if (cilindrico_direito < -5 || cilindrico_esquerdo < -5) {
            lente.innerHTML = "<p>Não há lente com essas informações!</p>"
        }
    }
}