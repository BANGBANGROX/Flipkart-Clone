const PaytmChecksum = require("../paytm/PaytmChecksum");
const { paytmMerchantKey, paytmParams } = require("../server");

const addPaymentGateway = async (request, response) => {
  let paytmChecksum = await PaytmChecksum.generateSignature(
    paytmParams,
    paytmMerchantKey
  );

  try {
    let params = {
      ...paytmParams,
      CHECKSUMHASH: paytmChecksum,
    };

    response.status(200).json(params);
  } catch (err) {
    console.log(err.response);
  }
};

module.exports = { addPaymentGateway };
