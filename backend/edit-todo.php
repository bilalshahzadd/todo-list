<?php
include './partials/db-connect.php';

// enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // get the JSON data from the request body
    $jsonData = file_get_contents('php://input');

    // decode the JSON data
    $data = json_decode($jsonData, true);

    // extract the data from the decoded data
    $title = $data['title'];
    $description = $data['description'];
    $id = $data['id'];

    // prepare the SQL query using prepared statements
    $stmt = mysqli_prepare($conn, "UPDATE `todos` SET `title` = ?, `description` = ? WHERE `todos`.`id` = ?");
    mysqli_stmt_bind_param($stmt, 'ssi', $title, $description, $id);
    $result = mysqli_stmt_execute($stmt);

    // return the result
    if ($result) {
        echo json_encode(array("message" => "Todo edit was successfull", "success" => true));
    } else {
        echo json_encode(array("message" => "Failed to edit todo", "success" => false));
    }

    // close the statement
    mysqli_stmt_close($stmt);
} else {
    echo json_encode(array("message" => "Invalid request method"));
}