
class IterateRequestHelper {
  wrapper(body) {
    let res = this.applyingDiscount(body)
    return res;
  }
  applyingDiscount(body) {
    if (Array.isArray(body)) {
      const priceObject = (body).reduce((previous, current) => {
         previous.products = previous.products || [];
        if (current.items.length > 1) {
          current.total = current.total - 50 || current.total
        }
        previous.products.push(current)
        return previous
      }, {})
      return priceObject
    }
    else {
      return body;
    }
  }
}
module.exports = new IterateRequestHelper();