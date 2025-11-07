<?php
// Set headers first
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

// Include database connection
require_once("../Database/connection.php");

$response = [];

// Check required 'name' POST field
if (isset($_POST["name"]) && trim($_POST["name"]) !== "") {
    $name = trim($_POST["name"]);
} else {
    $response["success"] = false;
    $response["error"] = "Name field is missing or empty";
    echo json_encode($response);
    exit();
}

// Generate random score and duration as per project spec
$score = rand(0, 1000);
$duration = rand(10, 300);

// Insert into scores table
$query = $mysql->prepare("INSERT INTO scores (name, score, duration) VALUES (?, ?, ?)");

if ($query) {
    $query->bind_param("sii", $name, $score, $duration);
    $success = $query->execute();
    
    if ($success) {
        $response["success"] = true;
        $response["score"] = $score;
        $response["duration"] = $duration;
    } else {
        $response["success"] = false;
        $response["error"] = "Database insert failed: " . $query->error;
    }
    
    $query->close();
} else {
    $response["success"] = false;
    $response["error"] = "Failed to prepare statement: " . $mysql->error;
}

echo json_encode($response);

// Close connection
$mysql->close();
?>
