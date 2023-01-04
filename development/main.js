import { playerArray } from "../js/playersDataBase.js";

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

import { getDatabase, set, get, update, remove, ref, child }
    from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"

const db = getDatabase();
const saveBtn = document.getElementById('save');
const updateBtn = document.getElementById('update');
const removeBtn = document.getElementById('remove');
const findBtn = document.getElementById('find');

// DOM single row elements

const getPlayerNameId = (array) => {
    array.forEach(element => {
        const playerId = element.idName;
        const playerNameValue = document.getElementById(playerId).value;
        console.log(playerNameValue)
        return playerNameValue
    });
}

console.log(getPlayerNameId(playerArray));

const scoreValue = document.getElementById('playerScore');
const asistValue = document.getElementById('playerAssist');
const notesValue = document.getElementById('playerNote');

// DOM data and place verification

const formDate = document.getElementById('formDate');
const formPlace = document.getElementById('formPlace');

const findDate = document.getElementById('dateFind');


function InsertData() {

    set(ref(db, 'Fussballspiel/' + formDate.innerHTML + "/" + playerNameValue.value), {
        place: formPlace.innerHTML,
        score: scoreValue.value,
        asist: asistValue.value,
        notes: notesValue.value,
    })
    .then(() => {
        alert('Data added successfully!');
    })
    .catch((error) => {
        alert(error)
    })
};

const UpdateData = () => {
    update(ref(db, 'Fussballspiel/' + formDate.innerHTML + "/" + playerNameValue), {
        place: formPlace.innerHTML,
        name: playerNameValue.value,
        score: scoreValue.value,
        asist: asistValue.value,
        notes: notesValue.value,
    })
    .then(() => {
        alert('Data updated successfully!');
    })
    .catch((error) => {
        alert(error)
    })
};

const RemoveData = () => {
    remove(ref(db, 'Fussballspiel/' + formDate.innerHTML + "/" + playerNameValue))
    .then(() => {
        alert('Data removed!');
    })
    .catch((error) => {
        alert(error)
    })
};

const FindData = () => {
    const dbref = ref(db);

    get(child(dbref, 'Fussballspiel/' + formDate.innerHTML + "/" + playerNameValue))
    .then((snapshot) => {
        if (snapshot.exists()) {
            someFieldId.innerHTML = "name" + snapshot.val().name;
            someFieldId.innerHTML = "score" + snapshot.val().score;
        }
        else {
            alert ("no data found");
        }
    })
    .catch((error) => {
        alert(error);
    })
};

saveBtn.addEventListener('click', InsertData);
updateBtn.addEventListener('click', UpdateData);
removeBtn.addEventListener('click', RemoveData);