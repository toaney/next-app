'use client';

export default function Practice1(){
  console.log("sell stock")
  let market = [ 7, 1, 4, 3, 6, 5]

  function maxProfit(prices){
    let sellIndex = prices.length - 1;
    let profit = 0;

    for (let buyIndex = prices.length - 1; buyIndex >= 0; buyIndex--){
      let buyValue = prices[buyIndex];
      let sellValue = prices[sellIndex];

      if (buyValue - sellValue >=0){
        sellIndex = buyIndex;
      } else {
        let price = sellValue - buyValue;
        profit = Math.max(price, profit);
      }
    }
    console.log(profit)
    return profit
  }

  maxProfit(market)

  return<h4>Practice 1</h4>
}



// let windowLeft = 0;
// // let windowRight = 0;
// let maxProfit = -Infinity;

// for (let windowRight = 0; windowRight < market.length; windowRight++){
//   left = arr[windowLeft];
//   right = arr[windowRight];
  
// }