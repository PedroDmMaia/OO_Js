function Carro(nome, cor, placa) {
    this.nome = nome;
    this.cor = cor;
    let _placa = placa;

    this.getPlaca = function () {
        return _placa;
    }

    this.setPlaca = function (placa) {
        if (typeof placa === 'string') {
            _placa = placa;
        }
    }
}

function Esportivo(nome, cor, placa) {
    Carro.call(this, nome, cor, placa);

    this.velocidade = function () {
        return '200Km'
    }
}

function Sedan(nome, cor, placa) {
    Carro.call(this, nome, cor, placa);

    this.velocidade = function () {
        return '150Km'
    }
}

function Suv(nome, cor, placa) {
    Carro.call(this, nome, cor, placa);

    this.velocidade = function () {
        return '100Km'
    }
}

const carroPedro = new Esportivo('BMW', 'prata', 'EDG');
const carroMaria = new Sedan('Civc', 'preto', 'EPY');
const carroJoão = new Suv('creta', 'branco', 'FHG');
