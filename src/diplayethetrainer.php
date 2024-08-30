<?php
// PHP Data Objects(PDO) Sample Code:
try {
    $conn = new PDO("sqlsrv:server = tcp:logiscool.database.windows.net,1433; Database = logiscool", "Eviman101", "ICTPass9356");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL query to display everything from the 'trainer' table
    $sql = "SELECT * FROM trainer";

    // Execute the query
    $stmt = $conn->query($sql);

    // Fetch all the results
    $trainers = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Display the results
    foreach ($trainers as $trainer) {
        echo "Trainer ID: " . $trainer['TrainerID'] . "<br>";
        echo "First Name: " . $trainer['FirstName'] . "<br>";
        echo "Last Name: " . $trainer['LastName'] . "<br>";
        echo "Phone Number: " . $trainer['PhoneNumber'] . "<br>";
        echo "Username: " . $trainer['Username'] . "<br>";
        echo "Password: " . $trainer['Password'] . "<br><br>";
    }

} catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e->getMessage()));
}
?>
