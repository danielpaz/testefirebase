
var authGoogleButton = document.getElementById('authGoogleButton');

var logoutButton = document.getElementById('logoutButton');

var displayName = document.getElementById('displayName');

logoutButton.addEventListener('click', function () {
    firebase
        .auth() 
        .signOut()
        .then(function () {
            displayName.innerText = 'Você não está autenticado';
            alert('Você saiu.');
        }, function (error) {
            console.error(error);
        });
});

authGoogleButton.addEventListener('click', function () {
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

function signIn(provider) {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            console.log(result);
            var token = result.credential.acessToken;
            displayName.innerText = 'Bem vindo, ' + result.user.displayName;
        }).catch(function (error) {
            console.log(error);
            alert('Fala na autenticação');
        })
};

