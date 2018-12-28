class Miner {
    constructor(blockchain, transactionPool, wallet, p2pServer) {
        this.blockchain = Blockchain
        this.transactionPool = transactionPool
        this.wallet = Wallet
        this.p2pServer = p2pServer
    }

    mine() {
        const validTransactions = this.transactionPool.validTransactions()
    }
}

module.exports = Miner