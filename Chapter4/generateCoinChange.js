function generateCoinChange(cents){

    var coins = [
        // ["toonies", 200], // for my Canadian friends ;)
        // ["loonies", 100], // ditto
        // ["halfdollars", 50],
        ["quarters", 25],
        ["dimes", 10],
        ["nickels", 5],
        ["pennies", 1],
    ]

    var coinChange = {}

    for (var i = 0; i < coins.length; i++){
        coinChange[coins[i][0]] = Math.floor(cents/coins[i][1]);
        cents = cents % coins[i][1];
    }

    return coinChange;
}

console.log(generateCoinChange(99));
