'use client';

export default function Practice2(){
  console.log("test")

  function findMaxProfit(prices){
    // if no profit; return 0;
    // set buy index = last position of prices array
    // set profit var to 0


    // sliding window
    let sellIndex = prices[prices.length - 1];
    let profit = 0;

    // iterate
    // sellIndex set to final position of prices array

    for (let buyIndex = prices[prices.length - 1]; buyIndex >= 0; buyIndex--){
      let buyPrice = prices[buyIndex];
      let sellPrice = prices[sellIndex];

      console.log("sell" + sellPrice)


      // create local buy/sell vars within the loop for clarity of code
      // - let buyPrice, sellPrice
      // compare prices
      // - if (sell - buy >= 0)...


      // if (buyValue - sellValue >=0){
      if (sellPrice - buyPrice < 0){
        sellIndex = buyIndex;
      } else {
        profit = Math.max(profit, (sellPrice - buyPrice))
      }
  
      // - else ... reassign sell to the buy price, since we want a high sell price value
      console.log('profit ' + profit)

    }

    console.log(profit)
    return profit
  }

//   let market = [ 7, 1, 4, 3, 6, 5]
  findMaxProfit([5, 7, 1, 4, 3, 6, 5])

  return<h4>Practice 2</h4>
}