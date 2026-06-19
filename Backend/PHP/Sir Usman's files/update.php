<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$name = $data['name'];
$email = $data['email'];

$conn = mysqli_connect("localhost","root","","learning");

$sql = "UPDATE students SET name='$name', email='$email' WHERE id=$id";

if(mysqli_query($conn,$sql)){
    echo "Updated";
} else {
    echo "Error";
}

mysqli_close($conn);
?>
