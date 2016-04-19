$(document).ready(function() {
	$('#alarm').hide();
	$("#alarmButton").click(function(){
			$('#alarm').toggle(1000);
    }); 
});