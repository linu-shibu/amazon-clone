const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Jqa9DSEA7QNnifDqMBfgutlVP3pgUQtr4IxKpF805haBwJgFfOveLpXjHzXzaXH8D3FE5ahmiftjgFnkJPJnHNE00nNuI0qfe"
);

// API

// App config
const app = express();

// Middle wares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved,yeaa , for amount : ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// Endpoint
// http://localhost:5001/clone-ec729/us-central1/api
