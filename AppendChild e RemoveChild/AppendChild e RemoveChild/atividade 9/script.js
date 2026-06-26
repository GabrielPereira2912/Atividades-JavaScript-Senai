const buttonQuad = document.getElementById('buttonQuad');
const rQuad = document.getElementById('rQuad')
const quadrados = document.getElementById('quadrados');

buttonQuad.addEventListener('click', function () {
    const novoQuadrado = document.createElement('div');

    novoQuadrado.classList.add('quadrado');

    quadrados.appendChild(novoQuadrado);
});

rQuad.addEventListener('click', function (){
    quadrados.removeChild(quadrados.lastElementChild)
})