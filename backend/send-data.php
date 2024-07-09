<?php
include './db-connect.php';
header('Access-Control-Allow-Origin:*');

// Sql query
$sql = "SELECT * FROM todos";
$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// return the results
echo json_encode($data);