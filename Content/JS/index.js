$(document).ready(function () {
    $(".submit").click(function () {
        if (!$('.userName').val()) {
            $('.spanUser').addClass('warning');
            $('.userName').addClass('borderRed');
        }
        if (!$('.password').val()) {
            $('.spanPass').addClass('warning');
            $('.password').addClass('borderRed');
        }
    })
    $('.userName').blur(function () {
        var value = this.value;
        if (!value) {
            $('.spanUser').addClass('warning');
            $('.userName').addClass('borderRed');
        } else {
            $('.spanUser').removeClass('warning');
            $('.userName').removeClass('borderRed');
        }
    })
    $('.password').blur(function () {
        var value = this.value;
        if (!value) {
            $('.spanPass').addClass('warning');
            $('.password').addClass('borderRed');
        } else {
            $('.spanPass').removeClass('warning');
            $('.password').removeClass('borderRed');
        }
    })

})
