import React, {Fragment, useState} from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import {Title} from "../components/Title";
import ProductPage from "./ProductPage";
import Products from "../components/Products";
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