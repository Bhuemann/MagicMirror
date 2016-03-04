$(document).ready(function() {
$('#login-form').submit(function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Use Ajax to submit form data
         $.ajax({
            type: 'get',
            url: '/login',
            data: $form.serialize(),
            success: function (data) {
              //alert(data);
              //console.log(data);
              if(data == "login valid"){
                window.location.replace("index.html");
              }
              else{
                alert(data);
              }
            }
          });
    });
});