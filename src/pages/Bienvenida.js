function Bienvenida({ email }) {
    return (
        <div className="contenedor">
            <h1>¡Bienvenido!</h1>
            <p>Has iniciado sesión correctamente.</p>
            <p>Usuario: {email}</p>
        </div>
    );
}

export default Bienvenida;