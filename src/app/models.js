export class Conta {
    constructor(id, titular) {
        this._id = id
        this._titular = titular
        this._saldo = 0
        this._extrato = []
    }
}

export class Transacao {
    constructor(id, valor, idOrigem, idDestino) {
        this._id = id
        this._valor = valor
        this._idOrigem = idOrigem
        this._idDestino = idDestino
    }
}