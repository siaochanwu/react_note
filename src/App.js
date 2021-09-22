import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Third from "./pages/Third";

const App=()=>{
    return( 
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/second" component={Second}></Route>
                <Route exact path="/third" component={Third}></Route>
            </Switch>
        </HashRouter>
    );
}

export default App;