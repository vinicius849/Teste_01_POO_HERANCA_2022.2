const prompt = require('prompt-sync')()

class Veiculo {
    str = placa;
    int = ano;

    constructor(p, a) {
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro extends Veiculo {
    str = modelo;

    constructor(p, a, m) {
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro {
    int = autonomiaBateria;

    constructor(p, a, m, auto) {
        this.autonomiaBateria = auto;
    }
}

    const c1 = new CarroEletrico("XLP32", 2016, "Hyundai", 840);

    console.log(c1.placa);
    console.log(c1.ano);
    console.log(c1.modelo);
    console.log(c1.autonomiaBateria);

    const veiculo1 = new Veiculo("PIL211", 2012);

    console.log(veiculo1.placa);
    console.log(veiculo1.ano);

    const carro1 = new Carro("Pegeout", 2019, "WRL13");

    console.log(carro1.modelo);
    console.log(carro1.placa);
    console.log(carro1.ano);