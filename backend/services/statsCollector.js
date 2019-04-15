
'use strict';

class StatsCollector {
  constructor() {
    let responseTimeMs = [1000, 1200, 40000, 30000, 9000];
    let number = 500000;
    let badResultsRemoved = this.pushValue(responseTimeMs, number);
    console.log('badResultsRemoved>>>', badResultsRemoved)

    this.getMedian(badResultsRemoved);
  }
  pushValue(responseTimeMs, number) {
    let cleanTimesArray = [];
    let result = [];
    (responseTimeMs).map((singleTime) => {
      if (singleTime < 19000) {
        cleanTimesArray.push(singleTime)
      }
      else {
        console.log('Response time out');
      }
    })
    return new Promise((resolve, reject) => {
      result.push({ [number]: cleanTimesArray })
      resolve(result);
    })
  }



  getMedian(number) {
    console.log('number>>>', number)
  }

}
module.exports = new StatsCollector();
