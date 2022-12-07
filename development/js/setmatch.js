const selectedDate = document.getElementById('dateSelect');
const selectedPlace = document.getElementById('placeSelect');

const formDate = document.getElementById('formDate');
const formPlace = document.getElementById('formPlace');

const setMatchBtn = document.getElementById('setMatchBtn');


setMatchBtn.addEventListener("click", () => {
    formDate.textContent = selectedDate.value;
    formPlace.textContent = selectedPlace.value;
})
