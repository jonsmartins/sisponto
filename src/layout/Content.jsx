import React from "react";
import { Routes, Route } from "react-router-dom";
import './Content.css';
import Ponto from "../views/Ponto";
import Cadastro from '../views/Cadastro'
import QuadroFunc from "../views/QuadroFunc";

export default () =>{
    return (
        <main className="Content">
            <Routes>
                <Route path="/" exact element={<Ponto />} />
                <Route path="/cadastro" element={<Cadastro/>} />       
                <Route path="/quadrofunc" element={<QuadroFunc/>} />       
            </Routes>
        </main>
    )
}