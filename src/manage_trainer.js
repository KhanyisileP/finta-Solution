// Simulated trainers data
let trainers = [];

// Tab functionality
function openTab(evt, tabName) {
    const tablinks = document.getElementsByClassName("tablink");
    const tabcontents = document.getElementsByClassName("tabcontent");

    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Create Trainer
function createTrainer() {
    const firstName = document.getElementById('createFirstName').value;
    const lastName = document.getElementById('createLastName').value;
    const phoneNumber = document.getElementById('createPhoneNumber').value;
    const username = document.getElementById('createUsername').value;
    const password = document.getElementById('createPassword').value;

    const trainer = { firstName, lastName, phoneNumber, username, password };
    trainers.push(trainer);

    alert('Trainer created successfully!');
    document.getElementById('createTrainerForm').reset();
    displayTrainers();
}

// Search and populate trainer details for update
function searchTrainer() {
    const username = document.getElementById('updateSearch').value;
    const trainer = trainers.find(t => t.username === username);

    if (trainer) {
        document.getElementById('updateFirstName').value = trainer.firstName;
        document.getElementById('updateLastName').value = trainer.lastName;
        document.getElementById('updatePhoneNumber').value = trainer.phoneNumber;

        document.getElementById('updateTrainerForm').style.display = 'block';
    } else {
        alert('Trainer not found');
    }
}

// Update Trainer
function updateTrainer() {
    const username = document.getElementById('updateSearch').value;
    const trainer = trainers.find(t => t.username === username);

    if (trainer) {
        trainer.firstName = document.getElementById('updateFirstName').value;
        trainer.lastName = document.getElementById('updateLastName').value;
        trainer.phoneNumber = document.getElementById('updatePhoneNumber').value;

        alert('Trainer updated successfully!');
        document.getElementById('updateTrainerForm').reset();
        displayTrainers();
    }
}

// Display all trainers in View tab
function displayTrainers() {
    const trainersList = document.getElementById('trainersList');
    trainersList.innerHTML = '';

    trainers.forEach(trainer => {
        const card = document.createElement('div');
        card.className = 'trainer-card';

        card.innerHTML = `
            <
