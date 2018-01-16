import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Agenda } from "./pages/agenda";
import { Home } from "./pages/home";

import "./App.css";
import { ScheduleBuilder } from "./pages/schedule-builder";

class App extends Component {
    state = {
        mySchedule: []
    };

    render() {
        return (
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
                            render={renderProps => (
                                <Agenda
                                    {...renderProps}
                                    addToSchedule={talk => {
                                        this.setState(
                                            state => ({
                                                mySchedule: [
                                                    ...state.mySchedule,
                                                    talk
                                                ]
                                            })
                                        );
                                    }}
                                    removeFromSchedule={talk => {
                                        this.setState(
                                            state => {
                                                const newSchedule = [
                                                    ...state.mySchedule
                                                ];
                                                newSchedule.splice(
                                                    newSchedule.indexOf(
                                                        talk
                                                    ),
                                                    1
                                                );
                                                return {
                                                    mySchedule: newSchedule
                                                };
                                            }
                                        );
                                    }}
                                    mySchedule={
                                        this.state
                                            .mySchedule
                                    }
                                />
                            )}
                        />
                        <Route
                            path="/schedule-builder"
                            component={ScheduleBuilder}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
