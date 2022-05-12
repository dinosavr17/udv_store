import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import {Title} from "../components/Title";
import ProductList from "./ProductList";
export const Home = () => {
    return (
        <div>
            <Navbar/>
            <Title/>
            <Slider/>
            <ProductList/>
        </div>
    )

}