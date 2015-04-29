<?php
require("../private/db.connect.php");

$query = "SELECT s.id AS id, s.ht_id AS team_id, s.play_date, s.Court, t.name
FROM schedule s, team t
WHERE s.ht_id=t.id 
UNION
SELECT s.id, s.at_id AS team_id, s.play_date, s.Court, t.name
FROM schedule s, team t
WHERE s.at_id=t.id 
ORDER BY id ASC";

$sth = $pdo->query($query);

$game = array();

$a1 = array();

$i = count($sth);

while ($first = $sth->fetch(PDO::FETCH_ASSOC)){

	if($i % 2 == 0){
		
		$game["away"]=$first["name"];
		$game["id"]=$first["id"];
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
