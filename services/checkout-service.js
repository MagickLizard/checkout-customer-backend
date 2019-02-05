
class CheckoutService {
  constructor() {

  }
    add(data) {
      console.log('last step service>>>')
      console.log('data in add>>>', data)
      return data
    }
}
module.exports = new CheckoutService();
