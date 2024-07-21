<?php
include './partials/db-connect.php';

// enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// allow all origins
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

// request to delete the records
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $id = $_GET['id'];
    $stmt = mysqli_prepare($conn, "DELETE FROM todos WHERE id = $id");
    $result = mysqli_stmt_execute($stmt);

    if ($result) {
        echo json_encode(array("message" => "Todo Deleted successfully", "success" => true));
    } else {
        echo json_encode(array("message" => "Error deleting todo", "success" => false));
    }
}