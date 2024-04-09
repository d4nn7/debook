<?php

$dbc = mysqli_connect('localhost', 'root', '', 'mail');

$data = json_decode(file_get_contents('php://input'), true);
$adres = $data['adres'];

$query = "INSERT INTO mail (mail_adres)
          VALUES ('$adres')";

$result = mysqli_query($dbc, $query);

http_response_code('201');
header('Content-type: application/json');
print json_encode(array('message' => 'Email has been sent'));

mysqli_close($dbc);
?>