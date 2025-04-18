const hoje = new Date();
const diaDoAno = calcularDiaDoAno(hoje);
function mensagem(x) {
    frases();
    if (x == 1) {
        document.getElementById("mensagem").style.display = "flex";
        document.body.style.overflow = "hidden";
    } else {
        document.getElementById("mensagem").style.display = "   none";
        document.body.style.overflow = "visible";
    }
}

function calcularDiaDoAno(data) {
    const inicioDoAno = new Date(data.getFullYear(), 0, 0); // 0 = dia 0 de janeiro
    const diff = data - inicioDoAno;
    const umDia = 1000 * 60 * 60 * 24;
    const diaDoAno = Math.floor(diff / umDia);
    // document.getElementById("diaDoAno").innerText = `Hoje é o dia ${diaDoAno} do ano de ${hoje.getFullYear()}.`;
    return diaDoAno;
}

function frases() {
    const qntdFrases = 3;
    let valor = diaDoAno % qntdFrases;
    switch (valor) {
        case 0:
            document.getElementById("frase").innerHTML = "Você foi a pessoa que eu semprei sonhei em ter!";
            alert("entrou");
            break;
        case 1:
            alert("entrou1");
            document.getElementById("frase").innerHTML = "Quando fecho meus olhos, me vejo nos seus braços";
            break;
        default:
            alert("entrou2");
            document.getElementById("frase").innerHTML = "Eu desejo todo o sucesso do mundo para você! Te amo!";
            break;
    } 
}