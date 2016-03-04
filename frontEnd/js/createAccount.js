$(document).ready(function() {
   $("#password2").keyup(checkPasswordMatch);

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
              alert('form was submitted');
              console.log(data);
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