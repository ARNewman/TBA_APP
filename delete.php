<?php

require("../private/db.connect.php");

$id = (isset($_GET['id'])!= "")? $_GET['id'] : null;



$sth = $pdo->query("DELETE from schedule where id='$id' limit 1");

?>
