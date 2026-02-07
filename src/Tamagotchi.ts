import type { EstadoAnimo } from './EstadoAnimo';
import type { Comida } from './Comida';

class Tamagotchi {
    nombre: string;
    private _hambre: number;
    private _energia: number;
    estadoAnimo: EstadoAnimo;
    private _vivo: boolean;

    constructor(nombre: string) {
        this.nombre = nombre;
        this._hambre = this.limitarRango(100);
        this._energia = this.limitarRango(100);
        this.estadoAnimo = 'feliz';
        this._vivo = true;
    }

    get hambre(): number {
        return this._hambre;
    }

    set hambre(valor: number) {
        this._hambre = this.limitarRango(valor);
    }

    get energia(): number {
        return this._energia;
    }

    set energia(valor: number) {
        this._energia = this.limitarRango(valor);
    }

    private limitarRango(valor: number): number {
        return Math.max(0, Math.min(100, valor));
    }

    comer(comida: Comida): void {
        if (!this._vivo) {
            console.log(
                `${this.nombre} no puede comer. Duerme con los peces :(.`,
            );
            this.mostrarEstado();
            return;
        }

        switch (comida) {
            case 'Pizza':
                this.hambre += 10;
                break;
            case 'Hamburguesa':
                this.hambre += 20;
                break;
            case 'Pastel':
                this.hambre += 40;
                break;
            case 'Papa Venenosa':
                this._vivo = false;
                this.estadoAnimo = 'muerto';
                break;
        }

        this.actualizarEstado();
        this.mostrarEstado();
    }

    dormir(): void {
        if (!this._vivo) {
            console.log(`${this.nombre} ya duerme... con los peces :/.`);
            this.mostrarEstado();
            return;
        }

        console.log(`${this.nombre} está durmiendo`);
        this.energia = 100;
        this.actualizarEstado();
        this.mostrarEstado();
    }

    jugar(): void {
        if (!this._vivo) {
            console.log(
                `${this.nombre} no puede jugar. Duerme con los peces :(.`,
            );
            this.mostrarEstado();
            return;
        }

        console.log(`${this.nombre} está jugando`);
        this.energia -= 20;
        this.hambre -= 10;

        this.actualizarEstado();
        this.mostrarEstado();
    }

    mostrarEstado(): void {
        console.log(`Hambre: ${this.hambre}\nEnergía: ${this.energia}`);
        console.log(
            `Estado: ${this.estadoAnimo}\nVivo: ${this._vivo ? 'SÍ' : 'NO'}`,
        );
        console.log('===============================');
    }

    private actualizarEstado(): void {
        if (!this._vivo || this.hambre <= 0 || this.energia <= 0) {
            this._vivo = false;
            this.estadoAnimo = 'muerto';
            return;
        }

        if (this.energia < 30) {
            this.estadoAnimo = 'cansado';
        } else if (this.hambre < 30) {
            this.estadoAnimo = 'triste';
        } else if (this.energia > 80 && this.hambre > 80) {
            this.estadoAnimo = 'feliz';
        } else {
            this.estadoAnimo = 'normal';
        }
    }
}

export default Tamagotchi;
