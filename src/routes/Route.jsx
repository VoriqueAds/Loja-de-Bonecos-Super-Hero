import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "../pages/contato/Contato";
import Home from "../pages/home/Home";
import Lista from "../pages/lista/Lista";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="lista-tarefa" element={<Lista usuario="Joãozinho"/>} />
                        <Route path="contato" element={<Contato />} />
                        <Route path="*" element={<h1>Ocorreu algum erro</h1>} />
                </Routes>
            </BrowserRouter >
        );
    }
}

export default Router; 