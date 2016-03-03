$(document).ready(function() {
$('#login-form').submit(function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
         $.ajax({
            type: 'get',
            url: '/login',
            data: $form.serialize(),
            success: function (data) {
              alert('form was submitted');
              console.log(data);
            }
          });
    });
});