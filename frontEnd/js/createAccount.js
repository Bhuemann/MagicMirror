$(document).ready(function() {
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