const Block = require('./Block')

const block = new Block('foo', 'bar', 'hoge', 'zoo');

console.log(block.toString());
console.log(Block.genesis().toString());