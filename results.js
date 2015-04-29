$(document).ready(function(){
	
	$.getJSON('results.json', function(data){
	
	var output = '';
	
	for (i= 0; i<= data.agrade.ateams.length-1; i++){
		
			output += '<tr>' + '<td>' + data.agrade.ateams[i] + '</td>' + '<td>' + data.agrade.wins[i] + '</td>' + '<td>' + data.agrade.loss[i] + '</td>' + '<td>' + data.agrade.pm[i] + '</td>' + '</tr>';
		
	}
		
	
	$('#update').html(output);
	
	});
	
	});
