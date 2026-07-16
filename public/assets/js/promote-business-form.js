$(document).ready(function () {
    $("#promote-business").validate({
        rules: {
            your_name: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            phone_number: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
            },

            city: {
                required: true,
            },

            product_description: {
                required: true,
                minlength: 3,
            },

            description: {
                required: true,
            },
        },
        messages: {
            your_name: {
                required: "Please enter your name",
            },
            email: {
                required: "Please enter email",
                email: "Enter valid email",
            },
            phone_number: {
                required: "Please enter phone number",
                digits: "Only numbers allowed",
                minlength: "Enter valid phone number",
                maxlength: "Enter valid phone number",
            },

            city: {
                required: "Please enter city",
            },

            product_description: {
                required: "Please enter product description",
            },

            description: {
                required: "Please select option",
            },
        },
        submitHandler: function (form) {
            let submitBtn = $(form).find("button[type='submit']");
            $.ajax({
                url: $(form).attr("action"),
                type: "POST",
                data: new FormData(form),
                processData: false,
                contentType: false,
                beforeSend: function () {
                    submitBtn.prop("disabled", true);
                },
                success: function (response) {
                    if (response.status) {
                        $("#form-success")
                            .removeClass("hidden")
                            .html(response.message);
                        form.reset();
                        setTimeout(function () {
                            $("#form-success").addClass("hidden");
                        }, 5000);
                    }
                },
                error: function (xhr) {
                    if (xhr.status === 422) {
                        let errors = xhr.responseJSON.errors;
                        $.each(errors, function (field, message) {
                            $('[data-error-for="' + field + '"]').html(
                                message[0],
                            );
                        });
                    }
                },
                complete: function () {
                    submitBtn.prop("disabled", false);
                },
            });
        },
    });
});
