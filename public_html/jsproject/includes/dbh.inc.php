<?php

$servername = "localhost";
$dBUsername = "u464975169_root";
$dBPassword = "gizbyh-fembus-0byGdi";
$dBName = "u464975169_jsprojectlogin";

$conn = mysqli_connect($servername, $dBUsername, $dBPassword, $dBName);

if (!$conn) {
	die("Connection failed: ".mysqli_connect_error());
}
