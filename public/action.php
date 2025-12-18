<?php

include "database.php";

$text  = $_POST['text'];

$sql = "INSERT INTO comments (comment) VALUES ('$text')";
// $stmt = mysqli_prepare($conn, $sql);
// mysqli_stmt_bind_param($stmt, "ss", $text);
// mysqli_stmt_execute($stmt);
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

mysqli_close($conn);



?>