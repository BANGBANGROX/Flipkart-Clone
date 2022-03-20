const express = require("express");
const Connection = require("./database/db");
const DefaultData = require("./default");
const bodyPareser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const routes = require("./routes/routes");
const { v4: uuid } = require("uuid");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyPareser.json({ extended: true }));
app.use(bodyPareser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", routes);

Connection(process.env.MONGO_URI);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));

// data to database
DefaultData();

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;

let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUSTOMER_ID"] = process.env.PAYTM_CUSTOMER_ID;
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = "/callback";
paytmParams["EMAIL"] = "lakshya0809bang@gmail.com";
paytmParams["MOBILE_NO"] = "1234567890";

module.exports = { paytmMerchantKey, paytmParams };
