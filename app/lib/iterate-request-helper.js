
class IterateRequestHelper {
  wrapper(body) {
    let res = this.organiseData(body)
    return res;
  }
  organiseData(body) {
    return body;
  }

  calculateTotal() {

  }
}
module.exports = new IterateRequestHelper();