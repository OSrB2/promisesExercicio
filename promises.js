const fs = require('fs/promises');

function soma(a, b) {
  return new Promise(async (resolve, reject) => {
    if (!a || !b) {
      return reject('Não é um número');
    }
    const soma = a + b;
    await fs.appendFile('resultado.txt', `${a} + ${b} = ${soma}\n`);
    resolve();
  });
}

soma(5, 5);
