function mensagem(x) {
    if (x == 1) {
        document.getElementById("mensagem").style.display = "flex";
        document.body.style.overflow = "hidden";
    } else {
        document.getElementById("mensagem").style.display = "   none";
        document.body.style.overflow = "visible";
    }
}
