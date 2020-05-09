import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout.component";
import Game from "./pages/game.page";
import Login from "./pages/login.page";

const App = () => {
    return (
    <Layout>
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/game/:id">
                <Game />
            </Route>
            <Route>
                <h1>404 - No such place...</h1>
            </Route>
        </Switch>
    </Layout>
    );
}

export default App;