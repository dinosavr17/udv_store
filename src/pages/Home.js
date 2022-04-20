import React, {Fragment} from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import {Title} from "../components/Title";
import Categories from "../components/Categories"
import Products from "../components/Products";
export const Home = () => {
    return (
        <Fragment>
            <Navbar/>
            <Title/>
            <Slider/>
            <Products/>
        </Fragment>
    )

}