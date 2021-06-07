(document).ready

(function IIFE() {
   $('#username').focus();
   $('#submit').click(function() {
       
       let ValidEmail = $('#username').val() === ''; 
       let ValidPassword = $('#password').val() === ''; 

        if (validEmail === true && validPassword && vaildUsername === true) { 
           $('.valid').css, ('display', 'block');
            window.location = "http://127.0.0.1:5502/data.html"; 
        }
        else {
            $('.error').css, ('display', 'block'); 
        }
    });
});