import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import LoginPage from  "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import {AuthProvider, AuthContext} from "./context/auth";
import React, {useState,useContext} from "react";

const AppRoutes = () =>{
   
    const Private = ({children}) => {
        const {authenticated} = useContext(AuthContext);

        if(!authenticated){
            return <Navigate to="/login"/>;
        }

        return children;
    }


    return(
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/" element={<Private><HomePage/></Private>}/>
            </Routes>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;