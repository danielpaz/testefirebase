var authEmailPassButton = document.getElementById('authEmailPassButton');
var authGoogleButton = document.getElementById('authGoogleButton');

var createUserButton = document.getElementById('createUserButton');
var logoutButton = document.getElementById('logoutButton');

var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

var displayName = document.getElementById('displayName');

createUserButton.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function () {
            alert('Bem vindo ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console: ' + error.message)
        });
});