const buttonQuad = document.getElementById('buttonQuad');
const quadrados = document.getElementById('quadrados');

buttonQuad.addEventListener('click', function () {
    const novoQuadrado = document.createElement('div');

    novoQuadrado.classList.add('quadrado');

    quadrados.appendChild(novoQuadrado);
});

