import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Catalog from "./Catalog";
import Sections from "./Sections";
import Seats from "./Seats";
import { MoviesProvider } from "../contexts/MoviesContext";

export default function App() {
    return (
        <MoviesProvider>
            <Router>
                <Header />

                <Switch>
                    <Route path= "/sessoes">
                        <Sections />
                    </Route>

                    <Route path= "/assentos">
                        <Seats />
                    </Route>

                    <Route path= "/">
                        <Catalog />
                    </Route>

                </Switch>
            </Router>
        </MoviesProvider>
    );
}