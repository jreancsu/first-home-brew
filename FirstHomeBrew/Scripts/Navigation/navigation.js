$(function() {
    $('#menu').slicknav({
        prependTo: '#mobileMenu',
        label: '',
        beforeOpen: function() {
            $('#mobileMenu .title-wrapper').hide();
        },
        afterClose: function() {
            $('#mobileMenu .title-wrapper').show();
        }
    });
});