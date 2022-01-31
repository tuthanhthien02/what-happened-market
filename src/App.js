import React from "react";

import { Navbar } from "./components";
import { Header, Feature, BestProduct } from "./containers";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Feature />
            <BestProduct />
        </div>
    );
}

export default App;
