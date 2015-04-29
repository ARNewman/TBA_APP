$(document).ready(function(){
	
	$.getJSON('data.json', function(info){
		
		var a1mens = '';
		
		for (i= 0; i<= info.a1.date.length-1; i++){
		
		
		
		 a1mens += '<li data-role="list-divider">' + info.a1.date[i] + '</li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.a1.teams[5] + '<br>' + info.a1.teams[4] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.a1.time[0] + '</strong></p></li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.a1.teams[3] + '<br>' + info.a1.teams[2] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.a1.time[2] + '</strong></p></li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.a1.teams[1] + '<br>' + info.a1.teams[0] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.a1.time[4] + '</strong></p></li>';
		
			}
					
			
			update1 = document.getElementById('a1games');
			update1.innerHTML = a1mens;
		
			
		});

	
});


$(document).ready(function(){
	
	$.getJSON('data.json', function(info){

		var a2mens = '';

				for (i= 0; i<= info.a2.date.length-1; i++){
		
		
		
		 a2mens += '<li data-role="list-divider">' + info.a2.date[i] + '</li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.a2.teams[5] + '<br>' + info.a2.teams[4] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.a2.time[0] + '</strong></p></li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.a2.teams[3] + '<br>' + info.a2.teams[2] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.a2.time[2] + '</strong></p></li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.a2.teams[1] + '<br>' + info.a2.teams[0] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.a2.time[4] + '</strong></p></li>';
		
			}
							
			update2 = document.getElementById('a2games');
			update2.innerHTML = a2mens;
			
		
});
});	

$(document).ready(function(){
	
	$.getJSON('data.json', function(info){

		var womens = '';

				for (i= 0; i<= info.w1.date.length-1; i++){
		
		
		
		 womens += '<li data-role="list-divider">' + info.w1.date[i] + '</li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.w1.teams[5] + '<br>' + info.w1.teams[4] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.w1.time[0] + '</strong></p></li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.w1.teams[3] + '<br>' + info.w1.teams[2] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.w1.time[2] + '</strong></p></li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.w1.teams[1] + '<br>' + info.w1.teams[0] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.w1.time[4] + '</strong></p></li>';
		
			}
							
			update3 = document.getElementById('w1games');
			update3.innerHTML = womens;
			
		
});
});

$(document).ready(function(){
	
	$.getJSON('data.json', function(info){

		var bmens = '';

				for (i= 0; i<= info.b.date.length-1; i++){
		
		
		
		 bmens += '<li data-role="list-divider">' + info.b.date[i] + '</li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.b.teams[5] + '<br>' + info.b.teams[4] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.b.time[0] + '</strong></p></li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.b.teams[3] + '<br>' + info.b.teams[2] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.b.time[2] + '</strong></p></li>' + '<li>' + '<p style="font-size: 16px;"><strong>' + info.b.teams[1] + '<br>' + info.b.teams[0] + '</strong></p>' + '<p class="ui-li-aside" style="font-size: 16px;"><strong>' + info.b.time[4] + '</strong></p></li>';
		
			}
							
			update4 = document.getElementById('b1games');
			update4.innerHTML = bmens;
			
		
});
});		
