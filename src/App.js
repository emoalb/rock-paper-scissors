import './App.scss';
import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Game from "./components/Game";
import Index from "./components/Index";

const App = () => {

    return (
        <div className="App">
            <Switch>
                <Route path="/game/:uname">
                    <Game/>
                </Route>
                <Route path="/">
                    <Index/>
                </Route>

            </Switch>
        </div>
    );
}

export default App;
