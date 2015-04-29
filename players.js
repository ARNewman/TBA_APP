$.getJSON('player.json', function(info){
	
	var output = '<ul id="update" data-role="listview" data-inset="true">';
	$.each(info, function(key, val){
	
		output += '<li data-role="list-divider">' + val.name + '</li>';
		output += '<li><strong> Previous Clubs: </strong></p>' + val.clubs + '</li>';
		output += '<li><strong> Favourite Pro team:</strong><p>' + val.favTeam + '</p></li>';
		output += '<li><strong> From:</strong><p>' + val.from + '</p></li>';
	
	});

	output +='</ul>';
	
	$('#update').html(output);
	
	});
