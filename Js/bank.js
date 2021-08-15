document.getElementById('login-submit').addEventListener('click', function () {
    const emailfield = document.getElementById('user-email');
    const userEmail = emailfield.value;
    // password
    const passwordfield = document.getElementById('user-password');
    const userpassword = passwordfield.value;

    if (userEmail == 'myemail@gmail.com' && userpassword == 'secret') {
        window.location.href = 'banking.html';
    }

});
// handle diposit button
