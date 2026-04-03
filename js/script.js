$(document).ready(function() {
    const $contactForm = $('#contact-form');
    const $statusMessage = $('#form-status');
    const $submitBtn = $('#submit-btn');

    $contactForm.on('submit', function(e) {
        e.preventDefault();

        $submitBtn.prop('disabled', true);
        const originalBtnText = $submitBtn.html();
        $submitBtn.html('<span>Sending...</span>');

        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        setTimeout(() => {
            $statusMessage.text(`Thank you, ${formData.name}! Your message has been sent.`)
                          .addClass('success'); 
            
            $contactForm[0].reset();
            
            $submitBtn.prop('disabled', false).html(originalBtnText);

            setTimeout(() => {
                $statusMessage.fadeOut(500, function() {
                    $(this).text("").show(); 
                });
            }, 5000);
        }, 1500);
    });
});