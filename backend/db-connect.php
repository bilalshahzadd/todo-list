<?php
// db creds
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "backend";

// creating connection
$conn = mysqli_connect($host, $user, $pass, $dbname);

// checking connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}