// Simulated student data
const students = [
    {
        id: '001',
        name: 'Alice',
        surname: 'Smith',
        age: 12,
        dateRegistered: '2024-01-15',
        enrolledFor: 'Blox 151'
    },
    {
        id: '002',
        name: 'Bob',
        surname: 'Johnson',
        age: 14,
        dateRegistered: '2024-03-22',
        enrolledFor: 'Mix 311'
    }
    // Add more students as needed
];

// Function to search for a student
function searchStudent() {
    const searchInput = document.getElementById('studentSearch').value.toLowerCase();
    const student = students.find(student => student.name.toLowerCase() === searchInput || student.id === searchInput);

    if (student) {
        document.getElementById('studentName').textContent = student.name;
        document.getElementById('studentSurname').textContent = student.surname;
        document.getElementById('studentAge').textContent = student.age;
        document.getElementById('dateRegistered').textContent = student.dateRegistered;
        document.getElementById('enrolledFor').textContent = student.enrolledFor;

        document.getElementById('studentDetails').style.display = 'block';
    } else {
        alert('Student not found');
    }
}

// Function to update package options based on selection
function updatePackageOptions() {
    const packageSelect = document.getElementById('packageSelect').value;
    const courseOptions = document.getElementById('courseOptions');
    const campOptions = document.getElementById('campOptions');

    courseOptions.style.display = 'none';
    campOptions.style.display = 'none';

    if (packageSelect === 'course') {
        courseOptions.style.display = 'block';
    } else if (packageSelect === 'camp') {
        campOptions.style.display = 'block';
    }

    document.getElementById('packageOptions').style.display = 'block';
}

// Function to submit enrollment (dummy function for now)
function submitEnrollment() {
    alert('Enrollment submitted successfully!');
}
