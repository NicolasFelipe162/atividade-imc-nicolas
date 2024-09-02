const primeiroNome = "Samuel";
const sobrenome = "Moreira";
const idade = 16;
const altura = 150;
const peso = 45;

const imc = peso / (altura * altura);

console.log(`O paciente ${primeiroNome} ${sobrenome} tem ${idade} anos, ${altura / 100}m de altura, ${peso}kg e seu IMC é ${imc}`);