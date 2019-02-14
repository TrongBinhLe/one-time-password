const admin = require("firebase-admin");
const functions = require('firebase-functions');
const createUser = require ('./create_user');
const serviceAccount = require("./serviceAccountKey.json");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://on-time-password-53271.firebaseio.com"
});

exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send("Hello from Firebase!");
});

exports.goodbye = functions.https.onRequest((request,response) => {
	response.send("Say goodbye");
});

exports.create = functions.https.onRequest(createUser);
// exports.create = functions.https.onRequest((request, response)=>{
// 	response.send(response.body)
// })



