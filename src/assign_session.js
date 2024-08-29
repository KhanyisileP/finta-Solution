function createSession() {
    const contentDiv = document.getElementById('content');
    window.location.href = 'create_session.html';
    contentDiv.innerHTML = `
        <h2>Create Session</h2>
        <form>
            <div class="form-group">
                <label for="sessionName">Session Name:</label>
                <input type="text" id="sessionName" name="sessionName" required>
            </div>
            <div class="form-group">
                <label for="sessionDate">Session Date:</label>
                <input type="date" id="sessionDate" name="sessionDate" required>
            </div>
            <div class="form-group">
                <label for="sessionTrainer">Trainer:</label>
                <input type="text" id="sessionTrainer" name="sessionTrainer" required>
            </div>
            <button type="submit">Create</button>
        </form>
    `;
}

function updateSession() {
    const contentDiv = document.getElementById('content');
    window.location.href = 'update_session.html';
    contentDiv.innerHTML = `
        <h2>Update Session</h2>
        <form>
            <div class="form-group">
                <label for="sessionId">Session ID:</label>
                <input type="text" id="sessionId" name="sessionId" required>
            </div>
            <div class="form-group">
                <label for="newSessionName">New Session Name:</label>
                <input type="text" id="newSessionName" name="newSessionName">
            </div>
            <div class="form-group">
                <label for="newSessionDate">New Session Date:</label>
                <input type="date" id="newSessionDate" name="newSessionDate">
            </div>
            <div class="form-group">
                <label for="newSessionTrainer">New Trainer:</label>
                <input type="text" id="newSessionTrainer" name="newSessionTrainer">
            </div>
            <button type="submit">Update</button>
        </form>
    `;
}

function viewSession() {
    const contentDiv = document.getElementById('content');
    window.location.href = 'view_session.html';
    contentDiv.innerHTML = `
        <h2>View Sessions</h2>
        <ul>
            <li>Session 1 - Date: 2024-09-01, Trainer: John Doe</li>
            <li>Session 2 - Date: 2024-09-05, Trainer: Jane Smith</li>
            <!-- You can dynamically load actual session data here -->
        </ul>
    `;
}
