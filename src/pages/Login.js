import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validarUsuario } from "../services/AuthService";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function manejarEnvio(evento) {
        evento.preventDefault();

        const esValido = validarUsuario(email, password);

        if (esValido) {
            navigate("/bienvenida", {
                state: { email: email }
            });
        } else {
            setError("Correo electrónico o contraseña incorrectos");
        }
    }

    return (
        <div className="contenedor">
            <h1>Iniciar sesión</h1>

            <form onSubmit={manejarEnvio}>
                <label htmlFor="email">Correo electrónico:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                    required
                />

                <label htmlFor="password">Contraseña:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(evento) => setPassword(evento.target.value)}
                    required
                />

                <button type="submit">Entrar</button>
            </form>

            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Login;