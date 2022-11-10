import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu({usuario}) {
    return (
        <nav class="container-nav">
        <ul>
            <li class="navbar-item">Olá {usuario}</li>
            <li>
            <NavLink
                    className="navbar-item"
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="navbar-item"
                    to="/lista-tarefa"
                >
                    Lista de tarefas
                </NavLink>
            </li>
            <li>
            <NavLink
                    className="navbar-item"
                    to="/contato"
                >
                    Sobre
                </NavLink>
            </li>
        </ul>
    </nav>
    );
}