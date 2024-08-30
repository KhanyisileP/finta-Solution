// Simulated students data
let students = [];

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

// Create Student
function createStudent() {
    const firstName = document.getElementById('createFirstName').value;
    const lastName = document.getElementById('createLastName').value;
    const phoneNumber = document.getElementById('createPhoneNumber').value;
    const username = document.getElementById('createUsername').value;
    const password = document.getElementById('createPassword').value;
    const enrollmentID = document.getElementById('createEnrollmentID').value;

    const student = { firstName, lastName, phoneNumber, username, password, enrollmentID };
    students.push(student);

    alert('Student created successfully!');
    document.getElementById('createStudentForm').reset();
    displayStudents();
}

// Search and populate student details for update
function searchStudent() {
    const username = document.getElementById('updateSearch').value;
    const student = students.find(s => s.username === username);

    if (student) {
        document.getElementById('updateFirstName').value = student.firstName;
        document.getElementById('updateLastName').value = student.lastName;
        document.getElementById('updatePhoneNumber').value = student.phoneNumber;
        document.getElementById('updateUsername').value = student.username;
        document.getElementById('updatePassword').value = student.password;
        document.getElementById('updateEnrollmentID').value = student.enrollmentID;

        document.getElementById('updateStudentForm').style.display = 'block';
    } else {
        alert('Student not found');
    }
}

// Update Student
function updateStudent() {
    const username = document.getElementById('updateSearch').value;
    const student = students.find(s => s.username === username);

    if (student) {
        student.firstName = document.getElementById('updateFirstName').value;
        student.lastName = document.getElementById('updateLastName').value;
        student.phoneNumber = document.getElementById('updatePhoneNumber').value;
        student.username = document.getElementById('updateUsername').value;
        student.password = document.getElementById('updatePassword').value;
        student.enrollmentID = document.getElementById('updateEnrollmentID').value;

        alert('Student updated successfully!');
        document.getElementById('updateStudentForm').reset();
        displayStudents();
    } else {
        alert('Error updating student.');
    }
}

// Display all students
function displayStudents() {
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';

    students.forEach((student, index) => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        studentCard.innerHTML = `
            <h3>Student ${index + 1}</h3>
            <p><strong>Name:</strong> ${student.firstName} ${student.lastName}</p>
            <p><strong>Phone:</strong> ${student.phoneNumber}</p>
            <p><strong>Username:</strong> ${student.username}</p>
            <p><strong>Enrollment ID:</strong> ${student.enrollmentID}</p>
        `;
        studentsList.appendChild(studentCard);
    });
}

// Initial display of students
displayStudents();
