import { BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";

import React from "react";
import StorePicker from './StorePicker';
import App from './app';
import NotFound from './NotFound';

const Router= () =>(
    
    <BrowserRouter>
    
        <Routes>
            <Route exact path="/"  Component={StorePicker}></Route>{/*
            first route is the home page starting with / and when we match the path with this slash we wnt to render our stoore picker*/} 
            {/* <Route ></Route> */}
            <Route path="/store/:storeId" Component={App}></Route>
            <Route path="*" Component={NotFound}></Route>
            {/* to specify the error page that doesnot exist on the site */}
            </Routes>
    </BrowserRouter>
)

export default Router;
