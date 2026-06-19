<?php
header("Access-Control-Allow-Origin: http://localhost:5173");

$conn = mysqli_connect("localhost","root","","learning");

$result = mysqli_query($conn, "SELECT * FROM students");

$data = [];

while($row = mysqli_fetch_assoc($result)){
    $data[] = $row;
}

echo json_encode($data);

mysqli_close($conn);
?>