$(document).ready(function(){
	$("loginform cf").function validateForm()
	{
		var x=document.forms["login"]["username"].value;
		if (x==null || x=="")
		  {
		  alert("Please fill out the username");
		  return false;
		  }
	}
}