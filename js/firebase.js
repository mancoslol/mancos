 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAYyIAEMaKaS1YAbxGTFDNHX1HHFPgsVl8",
   authDomain: "databasemancos.firebaseapp.com",
   projectId: "databasemancos",
   storageBucket: "databasemancos.appspot.com",
   messagingSenderId: "224063865741",
   appId: "1:224063865741:web:d2c3b2a5900cd0550c73c4",
   measurementId: "G-15D5HBH4JS"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app)