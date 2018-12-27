const {
    INITIAL_BALANCE
} = require('../config')
const ChainUtil = require('../chain-util')

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE
        this.keyPair = ChainUtil.genKeyPair()
        this.publicKey = this.keyPair.getPublic().encode('hex')
    }

    toString() {
        return `Wallet -
        publicKey : ${this.publicKey.toString()}
        balance   : ${this.balance}`
    }

    sign(dataHash) {
        return this.keyPair.sign(dataHash)
    }

    static signTransaction(transaction, senderWallet) {
        transaction.input = {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(ChainUtil.hash(transaction.outputs))
        }
    }
}

module.exports = Wallet