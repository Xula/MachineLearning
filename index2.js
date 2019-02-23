const Brain = require('brain.js');
const data = require('./data.json');

const net = new Brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

net.train(trainingData, {
    iterations: 200
});

const result = net.run('i love video games');

console.log(`Categoria: ${result}`);