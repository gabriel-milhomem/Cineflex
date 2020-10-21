import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import MovieCatalog from "./MovieCatalog";

import {MoviesProvider} from "./contexts/MoviesContext";

export default function App() {
    return (
        <MoviesProvider>
            <Router>
                <Header />

                <Switch>
                    <Route path= "/">
                        <MovieCatalog />
                    </Route>

                </Switch>
            </Router>
        </MoviesProvider>
    );
}