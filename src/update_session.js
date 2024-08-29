function loadSessionDetails() {
    const sessionSelect = document.getElementById('sessionSelect');
    const selectedSessionId = sessionSelect.value;

    if (selectedSessionId) {
        // Display the form
        document.getElementById('updateSessionForm').style.display = 'block';

        // Placeholder for loading session details (This should be replaced with actual data retrieval logic)
        if (selectedSessionId === '1') {
            document.getElementById('sessionDate').value = '2024-09-01';
            document.getElementById('startTime').value = '09:00';
            document.getElementById('endTime').value = '11:00';
            document.getElementById('venue').value = 'Room 101';
            document.getElementById('description').value = 'Introduction to Programming';
            document.getElementById('trainerId').value = '1';
            document.getElementById('enrollmentId').value = '1001';
        } else if (selectedSessionId === '2') {
            document.getElementById('sessionDate').value = '2024-09-05';
            document.getElementById('startTime').value = '13:00';
            document.getElementById('endTime').value = '15:00';
            document.getElementById('venue').value = 'Room 202';
            document.getElementById('description').value = 'Advanced Web Development';
            document.getElementById('trainerId').value = '2';
            document.getElementById('enrollmentId').value = '1002';
        }
    } else {
        // Hide the form if no session is selected
        document.getElementById('updateSessionForm').style.display = 'none';
    }
}

document.getElementById('updateSessionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const sessionDate = document.getElementById('sessionDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const venue = document.getElementById('venue').value;
    const description = document.getElementById('description').value;
    const trainerId = document.getElementById('trainerId').value;
    const enrollmentId = document.getElementById('enrollmentId').value;

    // Placeholder for update session logic
    console.log('Session Updated:');
    console.log('Date:', sessionDate);
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
    console.log('Venue:', venue);
    console.log('Description:', description);
    console.log('Trainer ID:', trainerId);
    console.log('Enrollment ID:', enrollmentId);

    // Display success message
    document.getElementById('message').textContent = 'Session updated successfully!';
});
