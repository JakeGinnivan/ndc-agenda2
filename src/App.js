import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Agenda } from "./pages/agenda";
import { Home } from "./pages/home";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import schedule from "./schedule.redux";

import "./App.css";
import { ScheduleBuilder } from "./pages/schedule-builder";

const store = createStore(
    combineReducers({
        schedule
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    state = {
        mySchedule: []
    };

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <div>
                            <Link to="/">Home</Link>
                            <Link to="/agenda">Agenda</Link>
                            <Link to="/schedule-builder">
                                Schedule Builder
                            </Link>
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
                            <Route
                                path="/schedule-builder"
                                component={ScheduleBuilder}
                            />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
