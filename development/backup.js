




// Main form listen

const mainForm = document.getElementById('player-form');

mainForm.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const playerNameValue = getFormValue('playerNameValue');
    const scoreValue = getFormValue('scoreValue');
    const asistValue = getFormValue('asistValue');
    const notesValue = getFormValue('notesValue');

    saveValues(playerNameValue, scoreValue, asistValue, notesValue); 

}


// Get form id's - function

function getFormValue(id) {
    const formValue = document.getElementById(id).value;
    return formValue;
}


// Save values to firebase

function saveValues(playerNameValue, scoreValue, asistValue, notesValue) {
    const newValuesRef = valuesRef.push();
    newValuesRef.set({
        playerNameValue: playerNameValue,
        scoreValue: scoreValue,
        asistValue: asistValue,
        notesValue: notesValue,
    })
}