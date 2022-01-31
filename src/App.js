import React from "react";

import { Navbar } from "./components";
import { Header, Feature, BestProducts } from "./containers";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Feature />
            <BestProducts />
        </div>
    );
}

export default App;
