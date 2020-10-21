import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Catalog from "./Catalog";

import {MoviesProvider} from "../contexts/MoviesContext";

export default function App() {
    return (
        <MoviesProvider>
            <Router>
                <Header />

                <Switch>
                    <Route path= "/sessoes/:id">

                    </Route>
                    <Route path= "/">
                        <Catalog />
                    </Route>

                </Switch>
            </Router>
        </MoviesProvider>
    );
}