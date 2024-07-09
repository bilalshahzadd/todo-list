<?php
include './db-connect.php';

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the JSON data from the request body
    $jsonData = file_get_contents('php://input');

    // Decode the JSON data
    $data = json_decode($jsonData, true);

    // Extract the data from the decoded data
    $title = $data['title'];
    $description = $data['description'];
    $completed = isset($data['completed']) ? $data['completed'] : 0;

    // Prepare the SQL query using prepared statements
    $stmt = mysqli_prepare($conn, "INSERT INTO `todos` (`title`, `description`, `completed`) VALUES (?, ?, ?)");
    mysqli_stmt_bind_param($stmt, 'ssi', $title, $description, $completed);
    $result = mysqli_stmt_execute($stmt);

    // Return the result
    if ($result) {
        echo json_encode(array("message" => "Data saved successfully", "success" => true));
    } else {
        echo json_encode(array("message" => "Failed to save data", "success" => false));
    }

    // Close the statement
    mysqli_stmt_close($stmt);
} else {
    echo json_encode(array("message" => "Invalid request method"));
}