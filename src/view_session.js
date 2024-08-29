const sessions = [
    {
        date: '2024-09-15',
        startTime: '10:00',
        endTime: '12:00',
        venue: 'Room 303',
        description: 'JavaScript Basics',
        trainerName: 'John Doe',
        studentName: 'Alice Smith'
    },
    {
        date: '2024-09-10',
        startTime: '14:00',
        endTime: '16:00',
        venue: 'Room 204',
        description: 'HTML & CSS Introduction',
        trainerName: 'Jane Roe',
        studentName: 'Bob Johnson'
    },
    // Add more sessions here
];

function displaySessions() {
    const sessionList = document.getElementById('sessionList');
    sessionList.innerHTML = '';

    // Sort sessions by date, from latest to earliest
    sessions.sort((a, b) => new Date(b.date) - new Date(a.date));

    sessions.forEach(session => {
        const sessionItem = document.createElement('div');
        sessionItem.className = 'session-item';

        sessionItem.innerHTML = `
            <h2>${session.date}</h2>
            <p><span>Start Time:</span> ${session.startTime}</p>
            <p><span>End Time:</span> ${session.endTime}</p>
            <p><span>Venue:</span> ${session.venue}</p>
            <p><span>Description:</span> ${session.description}</p>
            <p><span>Trainer Name:</span> ${session.trainerName}</p>
            <p><span>Student Name:</span> ${session.studentName}</p>
        `;

        sessionList.appendChild(sessionItem);
    });
}

// Call displaySessions on page load
window.onload = displaySessions;
