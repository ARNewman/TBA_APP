<?php
     
    require("../private/db.connect.php");
    
    
    session_start();
    $grade = (isset($_POST['grade'])!= "")? $_POST['grade'] : null;
    $home = (isset($_POST['home'])!= "")? $_POST['home'] : null;
    $away = (isset($_POST['away'])!= "")? $_POST['away'] : null;
    $date = (isset($_POST['date'])!= "")? $_POST['date'] : null;
    $week = (isset($_POST['week'])!= "")? $_POST['week'] : null;
    
    $success = array();
    
    $sth = $pdo->query("SELECT * FROM schedule WHERE week='$week';");

$row = $sth->fetch(PDO::FETCH_ASSOC);

$wk = $row['week'];
$comp_id = $row['comp_id'];
$season_id= $row['season_id'];
$play_date = $row['play_date'];
$court = $row['Court'];
$bye = $row['is_bye'];
$ht = $row['ht_id'];
$at = $row['at_id'];

$date1 = new DateTime(date('Y-m-d H:i:s', strtotime($date)));
$date2 = new DateTime(date('Y-m-d H:i:s', strtotime($play_date)));

$diff = $date1->diff($date2)->h; 

if(($home != $ht) && ($home != $at) && ($away != $ht) && ($away != $at)){
	$query = "INSERT INTO schedule SET id='NULL', comp_id='1', season_id='2', week='$week', play_date='$date', Court='1', is_bye='0', ht_id='$home', at_id='$away';";
	$pdo->query($query); 
	
	array_push($success, "success!");
	echo json_encode($success);
	
}
    
    
    
    ?>
