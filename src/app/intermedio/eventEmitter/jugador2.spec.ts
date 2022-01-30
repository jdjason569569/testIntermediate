import { Jugador2 } from './jugador2';

describe('Jugador 2 emit', ()=>{

    let jugador: Jugador2;

    beforeEach(()=>{
        jugador = new Jugador2();
    });

    it('Debe emitir un evento cuando recibe daño', ()=>{
        let nuevoHp = 0;

        jugador.hpCambia.subscribe((hp)=>{  //Lo subscribo al emiter
            nuevoHp = hp;
        });

        jugador.recibeDanio(1000);  //Lanzo el metodo para que se ejecute el subscribe;

        expect(nuevoHp).toBe(0);

    });

});