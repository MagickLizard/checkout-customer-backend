

'use strict';

class StatsCollector {
  constructor() {
    const responseTimeMs = [9000, 1200, 40000, 30000, 1000, 2000, 2000, 2000];
    const number = 500000;
    this.number = [];
    this.pushValue(responseTimeMs, number);
    this.getMedian();
    this.getAverage();
    this.result = []; // could just make this to give the result
  }
  pushValue(responseTimeMs, number) {
    let cleanTimesArray = [];
    let result = [];
    (responseTimeMs).map((singleTimeMs) => {
      if (singleTimeMs < 19000) {
        cleanTimesArray.push(singleTimeMs)
      }
      else {
        console.log('Response time out');
        return [];
      }
    })
    result.push(number, cleanTimesArray)
    this.number = result;
  }

  getMedian() {
    if (Object.keys(this.number).length > 0) {
      return (this.number).map((items) => {
        if (typeof items === 'object') {
          items.sort((a, b) => {
            return a - b;
          });
          let half = Math.floor(Object.keys(items).length / 2);
          if (Object.keys(items).length % 2) {
            return items[half]
          };
          let result = (items[half - 1] + items[half]) / 2.0;
          return result;
        }
        else {
          console.log('items in else >>', items)
        }
      })
    }
    else {
      return ['ERROR ELSE'];//TODO
    }
  }

  getAverage() {
    return (this.number).map((items) => {
      if (typeof items === 'object') {
        let sum = (items).reduce((a, b) => {
          return a + b;
        });
        let avg = sum / items.length;
        this.result = (avg);
        return avg; //TODO: DO I NEED TO ROUND UP
      }
      else {
        return ['ERROR ELSE']; //TODO
      }
    })
  }
}
module.exports = new StatsCollector();