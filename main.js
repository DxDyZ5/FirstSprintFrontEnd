const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', async (e) => {
    e.preventDefault();
    

    const apiURL = 'https://localhost:7117/api/UsuarioAdmin/GetUsuario';
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const userData = await response.json();
            

            if (userData.length > 0) {
                if (username.value === userData[0].usuario && password.value === userData[0].password) {
                    alert('Inicio de sesión exitoso. Redirige o realiza las acciones necesarias.');
                    window.location.href = "hola.html";
                } else {
                    alert('Credenciales incorrectas. Inténtalo de nuevo.');
                }
            } else {
                alert('No se encontró el usuario Admin en la API.');
            }
        } else {
            alert('Error al obtener los datos del usuario desde la API.');
        }
    } catch (error) {
        console.error(error);
        alert('Error al conectarse a la API.');
    }
});
