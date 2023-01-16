import { getDatabase, set, get, update, remove, ref, child, onValue }
    from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
// "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBq1KjfcnHhStjeEMqI4z0ISFPsRz9kmcI",
    authDomain: "zumbeispiel-a5fb4.firebaseapp.com",
    projectId: "zumbeispiel-a5fb4",
    storageBucket: "zumbeispiel-a5fb4.appspot.com",
    messagingSenderId: "775341938935",
    appId: "1:775341938935:web:bdc8f27ab27db60dac1bf2",
    measurementId: "G-KDYFEDN736",
    databaseURL: "https://zumbeispiel-a5fb4-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

    const db = getDatabase();

    const savedData = ref(db, 'Fussballspiel/');
    onValue(savedData, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    })


