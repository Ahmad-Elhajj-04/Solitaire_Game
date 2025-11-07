<?php
include("../../database/connection.php");

$response = [];

// Check required 'name' POST field
if (isset($_POST["name"]) && $_POST["name"] !== "") {
    $name = $_POST["name"];
} else {
    $response["success"] = false;
    $response["error"] = "Name field is missing";
    echo json_encode($response);
    return;
}

// Generate random score and duration as per project spec
$score = rand(0, 1000);  // example random score
$duration = rand(10, 300);  // example random duration in seconds

// Insert into scores table
$query = $mysql->prepare("INSERT INTO scores (name, score, duration) VALUES (?, ?, ?)");
$query->bind_param("sii", $name, $score, $duration);
$success = $query->execute();

if ($success) {
    $response["success"] = true;
    $response["score"] = $score;
    $response["duration"] = $duration;
} else {
    $response["success"] = false;
    $response["error"] = "Database insert failed";
}

echo json_encode($response);
?>
