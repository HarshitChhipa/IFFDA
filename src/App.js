import React from 'react';
import './assets/App.css';
import Dashboard from "./modules/Dashboard/Dashboard";

function App() {
    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <h1>IFDA - Order Delicious Food</h1>
                <p>A web application that allows users to order food.</p>
            </div>
            <Dashboard/>
        </div>
    );
}

export default App;
