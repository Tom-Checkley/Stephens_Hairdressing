const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const axios = require('axios');
const config = require('./config');

admin.initializeApp();

const reviewsUrl = `https://mybusiness.googleapis.com/v4/accounts/${config.myBusiness.accountId}/locations/${config.myBusiness.placeId}/reviews`;

exports.reviewsApi = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        return axios.get(reviewsUrl, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": config.oAuth.accessToken
                }
            })
            .then(res => {
                console.log(res.data);
                return response.status(200).json({
                    body: res.data
                });
            })
            .catch(err => {
                return response.status(500).json(err);
            });
    });
});

