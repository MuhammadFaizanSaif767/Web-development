<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];

$conn = mysqli_connect("localhost","root","","learning");

$sql = "INSERT INTO students (name,email) VALUES ('$name','$email')";

if(mysqli_query($conn,$sql)){
    echo "Inserted";
} else {
    echo "Error";
}

mysqli_close($conn);
?>