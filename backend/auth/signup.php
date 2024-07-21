<?php
include '../partials/db-connect.php';

// enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// allow all origins
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Get the JSON data from the request body
    $jsonData = file_get_contents('php://input');

    // Decode the JSON data
    $data = json_decode($jsonData, true);

    // Extract the data from the decoded data
    $username = $data['username'];
    $email = $data['email'];
    $password = $data['password'];
    $confirmPassword = $data['confirmPassword'];
    $gender = $data['gender'];

    if ($password != $confirmPassword) {
        echo json_encode(array("message" => "Passwords do not match", "status" => "error"));
        exit();
    } else {
        // Check if the username or email already exists
        $checkSql = "SELECT * FROM users WHERE username = '$username' OR email = '$email'";
        $result = mysqli_query($conn, $checkSql);

        if (mysqli_num_rows($result) > 0) {
            echo json_encode(array("message" => "Username or email already exists, try another one", "status" => "error"));
        } else {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO users (username, email, password, gender) VALUES ('$username', '$email', '$hashedPassword', '$gender')";
            if (mysqli_query($conn, $sql)) {
                echo json_encode(array("message" => "User registered successfully", "status" => "success"));
            } else {
                echo json_encode(array("message" => "Error: " . mysqli_error($conn), "status" => "error"));
            }
        }
    }
}

$conn->close();