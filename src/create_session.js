document.getElementById('createSessionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const sessionDate = document.getElementById('sessionDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const venue = document.getElementById('venue').value;
    const description = document.getElementById('description').value;
    const trainerId = document.getElementById('trainerId').value;
    const enrollmentId = document.getElementById('enrollmentId').value;

    // Placeholder for form submission logic
    console.log('Session Created:');
    console.log('Date:', sessionDate);
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
    console.log('Venue:', venue);
    console.log('Description:', description);
    console.log('Trainer ID:', trainerId);
    console.log('Enrollment ID:', enrollmentId);

    // Display success message
    document.getElementById('message').textContent = 'Session created successfully!';
    
    // Reset form after submission
    document.getElementById('createSessionForm').reset();
});
