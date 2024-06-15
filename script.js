document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == "Sifuentes" && password == "Diana") {
        alert("Bienvenido, Sifuentes!");
    } else if (username == "Brayan" && password == "Porfavor"){
        alert("Bienvenido Profesor");
    }   
    else {
        alert("Sacate, No Eres El Elegido");
    }
});

