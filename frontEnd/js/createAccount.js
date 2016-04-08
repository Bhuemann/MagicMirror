$(document).ready(function() {
	
	
	var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure","COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript","Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];
$('#text').keyboard({ layout: 'qwerty' }).autocomplete({source: availableTags}).addAutocomplete({position : {of : null, my : 'right top', at : 'left top',  collision: 'flip'}}).addTyping();
$('#password1').keyboard({ layout: 'qwerty' }).autocomplete({source: availableTags}).addAutocomplete({position : {of : null, my : 'right top', at : 'left top',  collision: 'flip'}}).addTyping();
$('#password1').keyboard({ layout: 'qwerty' }).autocomplete({source: availableTags}).addAutocomplete({position : {of : null, my : 'right top', at : 'left top',  collision: 'flip'}}).addTyping();
	
   $("#password2").keyup(checkPasswordMatch);

   var userExistsMessage = "username already exists";
   var successMessage = "user added";

$('#login-form').submit(function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Use Ajax to submit form data
         $.ajax({
            type: 'get',
            url: '/newUser',
            data: $form.serialize(),
            success: function (data) {
              if (data === userExistsMessage) {
                alert(data + "\nPlease try new username.");
                console.log(data);
              } else {
                window.location.replace("/login.html")
              }
            }
          });
    });
});


function checkPasswordMatch()
{
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();

    
 
    if(password1 == password2) {
       $("#validate-status").text("valid");        
        document.getElementById("submit").disabled = false; 
    }
    else {
        $("#validate-status").text("invalid");  
        document.getElementById("submit").disabled = true; 
    }
  }