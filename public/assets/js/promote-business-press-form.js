$(document).ready(function () {
    $.validator.addMethod(
        "requireOne",
        function (value, element) {
            return (
                $(element)
                    .closest("form")
                    .find('input[name="' + element.name + '"]:checked').length >
                0
            );
        },
        "Please select at least one option",
    );
    $("#promote-business-press").validate({
        rules: {
            your_name: {
                required: true,
            },
            company: {
                required: true,
            },
            email_address: {
                required: true,
                email: true,
            },
            phone_number: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 15,
            },
            "role[]": {
                requireOne: true,
            },
            budget: {
                required: true,
            },
            brief_enquiry: {
                required: true,
                minlength: 3,
            },
        },
        messages: {
            your_name: {
                required: "Please enter your name",
            },
            company: {
                required: "Please enter company name",
            },
            email_address: {
                required: "Please enter email",
                email: "Please enter valid email",
            },
            phone_number: {
                required: "Please enter phone number",
                digits: "Only numbers allowed",
                minlength: "Enter valid phone number",
                maxlength: "Enter valid phone number",
            },
            "role[]": {
                requireOne: "Please select at least one option",
            },
            budget: {
                required: "Please enter budget",
            },
            brief_enquiry: {
                required: "Please enter enquiry",
            },
        },
        submitHandler: function (form) {
            let submitBtn = $(form).find("button");
            let formData = new FormData(form);
            $.ajax({
                url: $(form).attr("action"),
                type: "POST",
                data: formData,
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
            return false;
        },
    });
});
