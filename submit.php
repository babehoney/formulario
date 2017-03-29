<?php
$connection = mysql_connect("localhost", "root", ""); // Establishing Connection with Server..
$db = mysql_select_db("evolution", $connection); // Selecting Database
//Fetching Values from URL
$name2=$_POST['name1'];
$email2=$_POST['email1'];
$password2=$_POST['password1'];
$contact2=$_POST['contact1'];
$country2=$_POST['country1'];
$address2 =$_POST['address1'];
//Insert query
$query = mysql_query("insert into formulario(name, email, password, contact,country,address) values ('$name2', '$email2', '$password2','$contact2','$country2','$address2')");
echo "Form Submitted Succesfully";
mysql_close($connection); // Connection Closed
?>