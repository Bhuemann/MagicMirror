$(document).ready(function(){
    $(".dropdown").hover(
    	function(){
        	$(".dropdown-menu").stop(true,true).slideDown("medium");  
    	},
    	function(){
    		$('.dropdown-menu').stop(true,true).slideUp("medium");
    	}
    )
});