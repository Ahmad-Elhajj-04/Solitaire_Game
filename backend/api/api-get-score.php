<?php
header("Content-Type: application/json");
include("../../database/connection.php");

$response = [];

// Fetch top 10 scores sorted by highest score
$result = $mysql->query("SELECT name, score, duration, submit FROM scores ORDER BY score DESC LIMIT 10");

if ($result) {
    $scores = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($scores);
} else {
    echo json_encode(["success" => false, "error" => "Failed to fetch scores"]);
}

$mysql->close();
?>
