import React from "react";
import './Menu.css'
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="Marcaponto">Registro de Ponto</Link>
                    </li>
                    <li>
                        <Link to="/cadastro">Cadastro</Link>
                    </li>
                    <li>
                        <Link to="/quadrofunc">Quadro de Funcionários</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}