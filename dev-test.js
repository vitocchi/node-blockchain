const Block = require('./blockchain/Block')

const fooBlock = Block.mineBlock(Block.genesis(), 'test')

console.log(fooBlock.toString())