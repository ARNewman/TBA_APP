<?php

ini_set('display_errors', 1);
//import the database connection script
require("../private/db.connect.php");

$query = "SELECT s.id AS id, r.home_score AS home, s.Court, s.ht_id
AS home_team, t.name
FROM results r, schedule s, team t
WHERE s.id=r.sched_id AND s.comp_id=1 AND s.ht_id = t.id
UNION
SELECT s.id AS id, r.away_score AS away, s.Court, s.at_id AS away_team, t.name
FROM results r, schedule s, team t
WHERE s.id=r.sched_id AND s.comp_id=1 AND s.at_id = t.id
ORDER BY id ASC";

$sth = $pdo->query($query);

$results = array();

$comps = array();

$i = count($sth);

while ($first = $sth->fetch(PDO::FETCH_ASSOC)){

	if($i % 2 == 0){
		
		$results["away"]=$first["name"];
		
		array_push($comps, $results);
		
	}
	
	else{
		$results["date"]=$first["play_date"];
		$results["court"]=$first["Court"];
		$results["home"]=$first["name"];
		
	}
	
	$i++;
	
	
}
echo json_encode($comps);

?>
