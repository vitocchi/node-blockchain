const {
    INITIAL_BALANCE
} = require('../config')

calss Wallet {
    constructor {
        this.balance = INITIAL_BALANCE
        this.keyPair = null
        this.publicKey = null
    }

    toString() {
        return `Wallet -
        publicKey : ${this.publicKey.toString()}
        balance   : ${this.balance}`
    }
}