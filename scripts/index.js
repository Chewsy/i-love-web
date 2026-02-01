let closeButton = document.querySelector("#closeButton");


function close() {
    document.querySelector("#frame").style.display = 'none';

    let target = document.querySelector(".selectedGrid");
    target.classList.remove("selectedGrid");
}

closeButton.addEventListener("click", close);


let learningJournalButton = document.querySelector("#learningJournal");

function openFrame(event) {
    document.querySelector("#frame").style.display = 'block';

    let target = event.target.closest("div");
    target.classList.add("selectedGrid")
}

learningJournalButton.addEventListener("click", openFrame)