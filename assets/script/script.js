let i = 0;
let max = 40;
let numberDice = 1;
let numberCoin = 1;

function roll(n) {
    setTimeout(function animation() {
        rollAnimation(n);
        i++;
        if (i < max) roll(n);
        else i = 0;
    }, 100)
}

function rollAnimation(n) {
    if (n == 'dice') {
        for (let j = 1; j <= numberDice; j++) {
            let diceImage = document.getElementById(`dices${j}`);
            let number = 1 + (Math.floor(Math.random() * 6));
            diceImage.setAttribute("src", `assets/image/dice${number}.png`)
        }
    } else if (n == 'coin') {
        for (let j = 1; j <= numberCoin; j++) {
            let coinImage = document.getElementById(`coins${j}`);
            let number = 1 + (Math.floor(Math.random() * 2));
            coinImage.setAttribute("src", `assets/image/coin${number}.png`)
        }
    }
}

function add(n) {
    if ((numberDice == 3 && n == 'dice') || (numberCoin == 3 && n == 'coin')) {
        alert('3 aja bro jangan kebanyakan');
    } else {
        const node = document.createElement("img");
        node.setAttribute("src", `assets/image/${n}1.png`);
        node.setAttribute("class", "responsive-img");
        if (n == 'dice') {
            node.setAttribute("id", `${n}s${numberDice + 1}`);
            numberDice++;
        } else if (n == 'coin') {
            node.setAttribute("id", `${n}s${numberCoin + 1}`);
            numberCoin++;
        }
        document.getElementById(`${n}-box`).appendChild(node);
    }
}