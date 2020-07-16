const functions = require("firebase-functions");

const admin = require("firebase-admin");

// var firebaseConfig = {
//   apiKey: "AIzaSyAMhSZp7VLzfq7eLsrkwo-gtMtgLs5Jswg",
//   authDomain: "fir-exmp-7dbd3.firebaseapp.com",
//   databaseURL: "https://fir-exmp-7dbd3.firebaseio.com",
//   projectId: "fir-exmp-7dbd3",
//   storageBucket: "fir-exmp-7dbd3.appspot.com",
//   messagingSenderId: "1079332325475",
//   appId: "1:1079332325475:web:6d785ee2823672d15f9056",
//   measurementId: "G-REV6ZT0N6J",
// };
// Initialize Firebase
admin.initializeApp();

// const toUpperCase = (string) => string.toUpperCase();

exports.addMessage = functions.https.onRequest((req, res) => {
  const text = req.query.text;
  const secretText = text;

  admin
    .database()
    .ref("/messages")
    .push({ text: secretText })
    .then(() => {
      res.json({ message: "Great!!!", text });
    })
    .catch(() => {
      res.json({ message: "Not Great!!!" });
    });
  //   res.send("hello");
  //   console.log("asdasdasd");
});
