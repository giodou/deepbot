import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./public/Login/Login";
import Settings from "./private/Settings";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./private/Orders";
import Automations from "./private/Automations";


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
            
        </BrowserRouter>
    )
}

export default Routes;