const temperaturas = [25, 30, 15, 20];

const temperaturaSorteada = temperaturas[Math.floor(Math.random() * temperaturas.length)];

console.log(`As temperaturas armazenadas são: ${temperaturas}`);

const temperaturaFahrenheit = (temperaturaSorteada * 9/5) + 32;

console.log(`A temperatura sorteada é ${temperaturaSorteada}°C, que corresponde a ${temperaturaFahrenheit}°F`);
