<?php
ini_set('display_errors', 1);
//import the database connection script
require("../private/db.connect.php");


$agrade = "SELECT s.id AS id, s.ht_id AS team_id, s.play_date, s.Court, t.name
FROM schedule s, team t
WHERE s.ht_id=t.id AND s.comp_id=1
UNION
SELECT s.id, s.at_id AS team_id, s.play_date, s.Court, t.name
FROM schedule s, team t
WHERE s.at_id=t.id AND s.comp_id=1
ORDER BY id ASC";

$sth = $pdo->query($agrade);

$game = array();

$a1 = array();

$i = count($sth);

while ($first = $sth->fetch(PDO::FETCH_ASSOC)){

	if($i % 2 == 0){
		
		$game["away"]=$first["name"];
		
		array_push($a1, $game);
		
	}
	
	else{
		$game["date"]=$first["play_date"];
		$game["court"]=$first["Court"];
		$game["home"]=$first["name"];
		
	}
	
	$i++;
	
	
}
echo json_encode($a1);


?>
