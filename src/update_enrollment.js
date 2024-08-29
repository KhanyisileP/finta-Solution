// Simulated enrollment data
const enrollments = [
    {
        id: 'enroll001',
        studentName: 'Alice',
        studentSurname: 'Smith',
        package: 'course',
        course: 'Blox 151'
    },
    {
        id: 'enroll002',
        studentName: 'Bob',
        studentSurname: 'Johnson',
        package: 'camp',
        camp: 'minecraft'
    }
    // Add more enrollments as needed
];

// Function to search for an enrollment
function searchEnrollment() {
    const searchInput = document.getElementById('enrollmentSearch').value.toLowerCase();
    const enrollment = enrollments.find(enrollment => enrollment.id.toLowerCase() === searchInput || enrollment.studentName.toLowerCase() === searchInput);

    if (enrollment) {
        document.getElementById('studentName').value = enrollment.studentName;
        document.getElementById('studentSurname').value = enrollment.studentSurname;

        const packageSelect = document.getElementById('packageSelect');
        packageSelect.value = enrollment.package;

        updatePackageOptions();

        if (enrollment.package === 'course') {
            document.getElementById('courseSelect').value = enrollment.course;
        } else if (enrollment.package === 'camp') {
            document.getElementById('campSelect').value = enrollment.camp;
        }

        document.getElementById('enrollmentForm').style.display = 'block';
    } else {
        alert('Enrollment not found');
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

// Function to update enrollment (dummy function for now)
function updateEnrollment() {
    alert('Enrollment updated successfully!');
}
