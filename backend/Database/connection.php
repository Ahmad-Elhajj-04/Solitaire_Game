<?php 
// Database configuration
$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "solitaire_game";

// Create connection
$mysql = new mysqli($db_host, $db_user, $db_pass, $db_name);

// Check connection
if ($mysql->connect_error) {
    http_response_code(500);
    die(json_encode([
        "success" => false,
        "error" => "Database connection failed: " . $mysql->connect_error
    ]));
}

// Set charset to UTF-8
$mysql->set_charset("utf8");
?>
