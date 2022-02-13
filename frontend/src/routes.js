import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./public/Login/Login";
import Settings from "./private/Settings/Settings";
import Dashboard from "./private/Dashboard/Dashboard";
import Orders from "./private/Orders";
import Automations from "./private/Automations";
import Symbols from "./private/Symbols/Symbols";

function Routes(){
    function PrivateRoute({children, ...rest}){
        return (
            <Route {...rest} render={() => {
                return localStorage.getItem('token')
                    ? children
                    : <Redirect to="/" />
            }} />
        )
    }

    return (
        <BrowserRouter>
            <Route path="/" exact>
                <Login />
            </Route>
            <PrivateRoute path="/settings">
                <Settings />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
                <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/orders">
                <Orders />
            </PrivateRoute>
            <PrivateRoute path="/automations">
                <Automations />
            </PrivateRoute>
            <PrivateRoute path="/symbols">
                <Symbols />
            </PrivateRoute>
            
        </BrowserRouter>
    )
}

export default Routes;