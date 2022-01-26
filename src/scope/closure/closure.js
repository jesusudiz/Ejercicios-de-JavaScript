const moneyBox = (coins)=>{
    var saveCoins= 0;
    saveCoins+= coins;
    console.log('MoneyBox: $'+saveCoins);
};


moneyBox(5);
moneyBox(10);


const money=() =>{
    debugger
    var saveCoins = 0;
    const countCoins = (coins)=>{
      debugger
      saveCoins+=coins;
      console.log('MoneyBox: $'+saveCoins);
    }
    return countCoins;
};

let total= money();

total(4);
total(20);
total(6);

