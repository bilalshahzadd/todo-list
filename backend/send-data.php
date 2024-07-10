<?php
include './db-connect.php';

// enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// allow all origins
header('Access-Control-Allow-Origin: *');

// sql query
$sql = "SELECT * FROM todos";
$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// return the results
echo json_encode($data);