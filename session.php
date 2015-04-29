<?php
require("../private/db.connect.php");
require("../private/salt.pepper");
ini_set('display_errors', 1);

session_start();
$user = ($_POST['username']!= "")? $_POST['username'] : null;
    $pass = ($_POST['password']!= "")? $_POST['password'] : null;
    $_SESSION['login_user'] = false;

$sth = $pdo->query("SELECT uname, pword FROM player WHERE uname='$user' and pword='$pass'");

$loggedIn = array();

$row = $sth->fetch(PDO::FETCH_ASSOC);

$un= $row['uname'];
$pw = $row['pword'];

$encrypt = $pass.$salt;
$hashed = hash('sha512', $encrypt);

if(( $un==$user) && ($pw == $pass)){

$_SESSION['login_user']=true;

array_push($loggedIn, $row['uname']);
echo json_encode($loggedIn);

}

?>
