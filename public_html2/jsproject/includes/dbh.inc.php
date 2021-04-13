<?php

$servername = "localhost";
$dBUsername = "id15043840_root";
$dBPassword = "3cJtYD$?.p,864q";
$dBName = "id15043840_jsprojectdb";

$conn = mysqli_connect($servername, $dBUsername, $dBPassword, $dBName);

if (!$conn) {
	die("Connection failed: ".mysqli_connect_error());
}
