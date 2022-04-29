let crearContador = () => {
  let num = 0;
  return (aumentar = () => {
    num++;
    return num;
  });
};

const contar = crearContador();

console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());
