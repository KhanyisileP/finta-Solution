// Simulated enrollment data
const enrollments = [
    {
        id: 'enroll001',
        studentName: 'Alice Smith',
        package: 'Course',
        course: 'Blox 151',
        date: '2024-08-29',
        time: '10:00 AM'
    },
    {
        id: 'enroll002',
        studentName: 'Bob Johnson',
        package: 'Camp',
        camp: 'Minecraft',
        date: '2024-08-28',
        time: '2:00 PM'
    },
    {
        id: 'enroll003',
        studentName: 'Carol White',
        package: 'Workshop',
        date: '2024-08-28',
        time: '1:00 PM'
    }
    // Add more enrollments as needed
];

// Function to display enrollments
function displayEnrollments() {
    const enrollmentsList = document.getElementById('enrollmentsList');
    enrollmentsList.innerHTML = '';

    // Sort enrollments by date and time (latest first)
    enrollments.sort((a, b) => new Date(`${b.date} ${b.time}`) - new Date(`${a.date} ${a.time}`));

    enrollments.forEach(enrollment => {
        const card = document.createElement('div');
        card.className = 'enrollment-card';

        card.innerHTML = `
            <h2>Enrollment ID: ${enrollment.id}</h2>
            <p><strong>Student Name:</strong> ${enrollment.studentName}</p>
            <p><strong>Package:</strong> ${enrollment.package}</p>
            ${enrollment.course ? `<p><strong>Course:</strong> ${enrollment.course}</p>` : ''}
            ${enrollment.camp ? `<p><strong>Camp:</strong> ${enrollment.camp}</p>` : ''}
            ${enrollment.workshop ? `<p><strong>Workshop:</strong> ${enrollment.workshop}</p>` : ''}
            <p><strong>Date:</strong> ${enrollment.date}</p>
            <p><strong>Time:</strong> ${enrollment.time}</p>
        `;

        enrollmentsList.appendChild(card);
    });
}

// Call the displayEnrollments function when the page loads
window.onload = displayEnrollments;
