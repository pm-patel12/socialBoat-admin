$(document).ready(function () {
    $('.password-view-btn').on('click', function () {
        if ('password' == ($(this).prev()).attr('type')) {
            ($(this).prev()).prop('type', 'text');
            $(this).toggleClass('active')
        } else {
            ($(this).prev()).prop('type', 'password');
            $(this).toggleClass('active')
        }
    })

})