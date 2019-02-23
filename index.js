const Brain = require('brain.js');

const network = new Brain.NeuralNetwork();

// network.train([
//     { input: [0,0,0], output: [0] },
//     { input: [0,0,1], output: [0] },
//     { input: [0,1,1], output: [0] },
//     { input: [1,0,1], output: [1] },
//     { input: [1,1,1], output: [1] }
// ]);

network.train([
    { input: [1,2], output: [1] }, //equipe 2 vence
    { input: [1,3], output: [1] }, //equipe 3 vence
    { input: [2,3], output: [0] }, // equipe 2 vence
    { input: [2,4], output: [1] }, // equipe 4 vence
    { input: [1,2], output: [0] }, // equipe 1 vence
    { input: [1,3], output: [0] }, // equipe 1 vence
    { input: [3,4], output: [0] } // equipe 3 vence
]);

const result = network.run([1,4]);

console.log(`Probabilidade: ${result}`);
// console.log(result);
