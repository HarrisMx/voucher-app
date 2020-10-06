//Functions to handle form validations and live changes

$(document).ready(function() {

    $('#App').load('../pages/Splash.html')
    setTimeout(
        () => {
            $('#App').load('../pages/login.html')
        },
        4000
    );

});