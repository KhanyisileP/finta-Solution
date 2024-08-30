function manageTrainer() {
    //alert("Manage Trainer option selected.");
    window.location.href = 'manage_trainer.html';
    // Replace this alert with actual navigation or functionality
}

function manageStudents() {
    //alert("Manage Students option selected.");
    window.location.href = 'manage_student.html';
    // Replace this alert with actual navigation or functionality
}

function assignSession() {
    //alert("Assign Session option selected.");
    window.location.href = 'assign_session.html';

    // Replace this alert with actual navigation or functionality
}

function manageEnrollment() {
    //alert("Manage Enrollment option selected.");
    window.location.href = 'manage_enrollment.html';
    // Replace this alert with actual navigation or functionality
}

// Example of redirecting back to the login page
function logout() {
    window.location.href = 'index.html';
}
// Function to fetch trainer data from the PHP script
function fetchTrainerData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "diplayethetrainer.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Print the response to the console
            console.log(xhr.responseText);
        }
    };
    xhr.send();
}

// Run the function to fetch the data when the page loads
window.onload = function() {
    fetchTrainerData();
};

