export function validarUsuario(email, password) {
    const emailCorrecto = "admin@gmail.com";
    const passwordCorrecta = "1234";

    return (
        email === emailCorrecto &&
        password === passwordCorrecta
    );
}