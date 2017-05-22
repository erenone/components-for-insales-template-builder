$.extend($.validator.messages, {
    required: "Это поле необходимо заполнить.",
    remote: "Пожалуйста, введите правильное значение.",
    email: "Пожалуйста, введите корректный адрес электронной почты.",
    url: "Пожалуйста, введите корректный URL.",
    date: "Пожалуйста, введите корректную дату.",
    dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
    number: "Пожалуйста, введите число.",
    digits: "Пожалуйста, вводите только цифры.",
    creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
    equalTo: "Пожалуйста, введите такое же значение ещё раз.",
    extension: "Пожалуйста, выберите файл с правильным расширением.",
    maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
    minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
    rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
    range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
    max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
    min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
});

/**
 * Serialize object
 * @returns {{}}
 */

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


$(function() {

    var $fastcheckoutForm = $('.js-fastcheckout-form');

    $fastcheckoutForm.validate({
        errorClass: 'is-error',
        rules: {
            'phone': {
                required: true
            },
            'name': {

            },
            'email': {
                required: true,
                email: true
            }
        },
        submitHandler: function(form) {
            ajaxAPI.checkout.order($fastcheckoutForm.serializeObject(), {
                'delivery': delivery_variant_id,
                'payment': payment_gateway_id
            }).done(function(response) {
                alertify.success('Заказ успешно отправлен');
                $fastcheckoutForm.trigger('reset');
                $.fancybox.close();
                location.href = response.location;
            }).fail(function(response) {
                console.log(response);
                $.each(response.errors, function(i, val) {
                    alertify.error(val[0]);
                });
            });
        }
    });
});