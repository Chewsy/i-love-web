let closeButton = document.querySelector("#closeButton");


function close() {
    document.querySelector("#frame").style.display = 'none';
}

closeButton.addEventListener("click", close);


let learningJournalButton = document.querySelector("#learningJournal");

// TODO navragen docent meegeven parameter met target id ipv elke button een functie geven
function openFrame(){
        document.querySelector("#frame").style.display = 'block';
}

learningJournalButton.addEventListener("click", openFrame)

