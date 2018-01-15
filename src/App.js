import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Agenda } from "./pages/agenda";
import { Home } from "./pages/home";

import "./App.css";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/agenda">Agenda</Link>
                    </div>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <Route
                            path="/agenda"
                            component={Agenda}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
