class Veiculo {
    placa : string;
    ano : number;
    

    constructor(p: string, a: number) {
        this.placa = p;
        this.ano = a;
    }
}

class Carro extends Veiculo {
    modelo : string;
    
    constructor(p : string, a: number, m: string) {
        super(p, a);
        this.modelo = m;
    }
}

class CarroEletrico extends Carro {
    autonomiaBateria : number;

    constructor(p: string, a: number, m: string, aut: number) {
        super(p, a, m);
        this.autonomiaBateria = aut;
    }
}

    let c1 = new CarroEletrico("XLP32", 2016, "Hyundai", 840);

    console.log(c1.placa);
    console.log(c1.ano);
    console.log(c1.modelo);
    console.log(c1.autonomiaBateria);

    let veiculo1 = new Veiculo("PIL211", 2012);

    console.log(veiculo1.placa);
    console.log(veiculo1.ano);

    let carro1 = new Carro("Pegeout", 2019, "WRL13");

    console.log(carro1.modelo);
    console.log(carro1.placa);
    console.log(carro1.ano);

