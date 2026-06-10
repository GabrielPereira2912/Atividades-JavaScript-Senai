function calcularFatorial(n) {
  if (n < 0) return "Número inválido (não existe fatorial de número negativo)";
  
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

alert(calcularFatorial(5));