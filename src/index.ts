import Tamagotchi from './Tamagotchi';

const t = new Tamagotchi('Firulais');

console.log('INICIO: FELIZ');
t.mostrarEstado();

t.jugar(); // 90h, 80e -> Normal
console.log('\nESTADO: NORMAL');

// TRISTE (hambre < 30, energia >= 30)
t.jugar(); // 80h, 60e
t.jugar();
t.dormir();
t.jugar();
t.jugar();
t.jugar();
t.dormir();
t.jugar();
t.jugar(); // 20h, 60e -> TRISTE
console.log('\nESTADO: TRISTE');

// CANSADO (energia < 30, hambre >= 30)
t.comer('Pizza'); // 30h, 60e
t.comer('Pizza');
t.jugar();
t.jugar(); // 20h, 20e -> CANSADO
console.log('\nESTADO: CANSADO');

// MUERTO
t.comer('Papa Venenosa');
console.log('\nESTADO: MUERTO');

// pruebas una vez muere
t.jugar();
t.dormir();
t.comer('Pizza');
