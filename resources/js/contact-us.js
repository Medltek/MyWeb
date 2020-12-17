$( document ).ready(function() {
    $( "#btn-contact-us" ).click(function() {
        var form = $("#contact-us-form")[0];
        if (form.checkValidity() === true) {
            var name = $('#contact-us-form #inputName').val();
            var email = $('#contact-us-form #inputEmail').val();
            
            $('#modalContactForm .modal-body .name').text(name);
            $('#modalContactForm .modal-body .email').text(email);

            $('#modalContactForm').modal();

            $('#alert-contact-success').show();
        }
    });

    $('#modalContactForm').on('hide.bs.modal', function (e) {
        $('#contact-us-form')[0].reset();
    });

    $('form').submit(false);
});