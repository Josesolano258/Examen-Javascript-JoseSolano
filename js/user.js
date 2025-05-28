//Script de iniciar seccion al usuario

document.getElementById("login-btn").addEventListener("click", () => {
    const username = prompt("Ingrese su nombre de usuario:");
    const password = prompt("Ingrese su contraseña:");

    if (username && password) {
        alert(`Bienvenido, ${username}!`);
        // Aquí puedes agregar lógica para autenticar al usuario con un servidor.
    } else {
        alert("Debe completar todos los campos.");
    }
});

//Script de registrar usuario

document.getElementById("register-btn").addEventListener("click", () => {
    const username = prompt("Ingrese un nombre de usuario:");
    const password = prompt("Ingrese una contraseña:");

    if (username && password) {
        alert(`Usuario ${username} registrado con éxito!`);
        // Aquí puedes agregar lógica para registrar al usuario en un servidor.
    } else {
        alert("Debe completar todos los campos.");
    }
});

