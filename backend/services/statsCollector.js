
'use strict';

class StatsCollector {
  constructor() {
    const responseTimeMs = [9000, 1200, 40000, 30000, 1000, 2000, 2000, 2000];
    this.requests = [];
    this.result = [];
    this.getMedian();
    this.getAverage();
  }
  pushValue(responseTimeMs) {
    if (Array.isArray(responseTimeMs)) {
      const filteredTimes = responseTimeMs.filter(singleTimeMs => singleTimeMs && singleTimeMs < 19000) || [];
      this.requests = filteredTimes;
    }
    else {
      this.requests = [];
    }
  }

  getMedian() {
    const items = this.requests || [];
    items.sort((a, b) => {
      return a - b;
    });
    const half = Math.floor(items.length / 2);
    if (items.length % 2) {
      this.result = items[half];
    };
    this.result = (items[half - 1] + items[half]) / 2.0;
    return this.result;
  }

  getAverage() {
    const items = this.requests || [];
    const sum = (items).reduce((a, b) => {
      return a + b;
    });
    const avg = sum / items.length;
    this.result = avg; //TODO: NEED TO ROUND UP
    return this.result;
  }
}
module.exports = new StatsCollector();