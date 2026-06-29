const cores = ["red", "blue", "green", "yellow"];
let cliqueCount = 0;

function criarQuadrado() {
    
    const corAtual = cores[cliqueCount % cores.length];
    
    const novoQuadrado = document.createElement("div");
    novoQuadrado.classList.add("quadrado");
    novoQuadrado.style.backgroundColor = corAtual;
    
    document.getElementById("galeria").appendChild(novoQuadrado);

    cliqueCount++;
}
