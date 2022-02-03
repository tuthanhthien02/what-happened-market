import React from "react";

import { Navbar } from "./components";
import {
    Header,
    Feature,
    BestProducts,
    ProductList,
    BrandStory,
    Issue,
    Video,
    Footer,
} from "./containers";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <main className="main">
                <Feature />
                <BestProducts />
                <ProductList />
                <BrandStory />
                <Issue />
                <Video />
            </main>
            <Footer />
        </div>
    );
}

export default App;
