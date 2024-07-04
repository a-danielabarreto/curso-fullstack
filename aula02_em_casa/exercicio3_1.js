const temperaturasEmCelsius = [25, 30, 15, 20];

console.log(`As temperaturas armazenadas são: ${temperaturasEmCelsius}`);

const temperaturaSorteada = temperaturasEmCelsius[Math.floor(Math.random() * temperaturasEmCelsius.length)];

const temperaturaEmFahrenheit = () => {
    let temperaturaEmFahrenheit = (temperaturaSorteada * 9/5) +32;
    return temperaturaEmFahrenheit;
}

console.log(`A temperatura sorteada é ${temperaturaSorteada}°C, que corresponde a ${temperaturaEmFahrenheit()}°F.`)