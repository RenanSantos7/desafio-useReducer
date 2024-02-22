export class Conta {
    constructor(id, titular) {
        this._id = id
        this._titular = titular
        this._saldo = 0
        this._extrato = []
    }
}

export class Transacao {
    constructor(id, valor, tipo, idOrigem, idDestino) {
        this._id = id
        this._valor = valor
        this._idOrigem = idOrigem
        this._idDestino = idDestino
        this._tipo = tipo
    }
}

export class Cliente {
    constructor (nome, email, rg, cpf, nascimento, ciente) {
        this._nome = nome
        this._email = email
        this._rg = rg
        this._cpf = cpf
        this._nascimento = nascimento
        this._ciente = ciente
    }
}