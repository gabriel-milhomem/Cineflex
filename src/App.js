import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Catalog from "./components/Catalog/Catalog";
import Sections from "./components/Sections/Sections";
import Seats from "./components/Seats/Seats";
import Sucess from "./components/Sucess";
import { MoviesProvider } from "./contexts/MoviesContext";

export default function App() {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <MoviesProvider>
                <Header />

                <Switch>
                    <Route path= "/sessoes">
                        <Sections />
                    </Route>

                    <Route path= "/assentos">
                        <Seats />
                    </Route>

                    <Route path= "/sucesso">
                        <Sucess />
                    </Route>

                    <Route path= "/">
                        <Catalog />
                    </Route>

                </Switch>
            </MoviesProvider>
        </Router>
    );
}