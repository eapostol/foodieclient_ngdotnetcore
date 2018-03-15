// eja: for mobile devices. ensures that the hamburger menu is removed after clicking
$(document).ready(function () {
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
});
